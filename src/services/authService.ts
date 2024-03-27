import settings from "../config/settings"
import { ErrorAPIResponse } from "../types/errorResponse"
import { SiginForm, SigupForm } from "../types/sign"
import authStore from "../stores/auth"


const authService = {

    signIn: async (data: SiginForm): Promise<Error | null> => {
        const res: Response = await fetch(settings.API_HOST + "/auth/signin", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res.ok) {
            const { token } = await res.json()
            window.localStorage.setItem(settings.NAME_KEY_TOKEN, token)
            authStore.setState({ token, authenticated: true })
            return null
        } else {
            const { message }: ErrorAPIResponse = await res.json()
            if (typeof message === 'string') {
                return new Error(message)
            } else {
                return new Error(message.join(","))
            }
        }
    },

    signUp: async (data: SigupForm): Promise<Error | null> => {

        const res: Response = await fetch(settings.API_HOST + "/user/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (res.ok) {
            console.log(await res.json())
            return null
        } else {
            const { message }: ErrorAPIResponse = await res.json()
            if (typeof message === 'string') {
                return new Error(message)
            } else {
                return new Error(message.join(","))
            }
        }
    },

    signOut: () => {
        window.localStorage.removeItem(settings.NAME_KEY_TOKEN)
        authStore.setState({ authenticated: false, token: null })
    }
}

export default authService