import { SiginForm, SigupForm } from "../types/sign"
import settings from '../config/settings'
import authStore from "../stores/auth"

const config = settings()

interface ApiResponse {
    message: string | string[]
    error: string
    statusCode?: number
}

const urlAuth = config.VITE_API_URL + 'auth/'

const authService = {

    signIn: async (data: SiginForm): Promise<null | Error> => {
        try {
            const res: Response = await fetch(urlAuth + 'signin', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!res.ok) {
                const dataRes: ApiResponse = await res.json()
                if (typeof dataRes.message === 'string') return new Error(dataRes.message)
                return new Error(dataRes.message.join(' ,'));
            }

            const { token }: { token: string } = await res.json()
            window.localStorage.setItem(config.VITE_TOKEN_KEY, token)
            authStore.setState({ token: token, authenticated: true })
            return null

        } catch (error) {
            if (error instanceof Error) return new Error(error.message);
            return new Error("Comunicate con el desarrollador.")
        }

    },

    signUp: async (data: SigupForm): Promise<null | Error> => {
        console.log(data)
        if (data.password !== data.confirmPassword) return new Error("Las contraseñas no coinciden.")
        try {
            const res = await fetch(urlAuth + 'signup', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!res.ok) {
                const dataRes: ApiResponse = await res.json()
                if (typeof dataRes.message === 'string') return new Error(dataRes.message)
                return new Error(dataRes.message.join(' ,'));
            }

            return null
        } catch (error) {
            if (error instanceof Error) return new Error(error.message);
            return new Error("Comunicate con el desarrollador.")
        }
    },

    signOut: async () => {
        window.localStorage.removeItem(config.VITE_TOKEN_KEY)
        authStore.setState({ authenticated: false, token: null })
    }
}

export default authService