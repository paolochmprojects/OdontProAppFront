import { SiginForm, SigupForm } from "../types/sign"
import settings from '../config/settings'
import authStore, { AuthState } from "../stores/auth"
import apiService, { ApiServiceInterface} from "./apiService"
import { StoreApi, UseBoundStore } from "zustand"

const config = settings()

interface SignInResponse {
    token: string
}

interface AuthServiceInterface {
    signIn: (data: SiginForm) => Promise<null | Error>
    signUp: (data: SigupForm) => Promise<null | Error>
    signOut: () => void
}

const urlAuth = config.VITE_API_URL + 'auth/'

class AuthService implements AuthServiceInterface {

    constructor(
        private apiService: ApiServiceInterface,
        private authstore: UseBoundStore<StoreApi<AuthState>>
    ) { }

    async signIn(data: SiginForm): Promise<Error | null> {
        const dataToSend = JSON.stringify(data)

        // send data to api.
        const resData = await this.apiService.post<SignInResponse>(urlAuth + "signin", dataToSend)
        if (resData instanceof Error) return resData

        // extract token from response.
        const { token } = resData
        window.localStorage.setItem(config.VITE_TOKEN_KEY, token)
        authStore.setState({ authenticated: true, token })
        return null
    }

    async signUp(data: SigupForm): Promise<Error | null> {
        const dataToSend = JSON.stringify(data)
        const resData = await this.apiService.post<SignInResponse>(urlAuth + "signup", dataToSend)

        if (resData instanceof Error) {
            return resData
        }
        return null
    }

    signOut() {
        window.localStorage.clear()
        this.authstore.setState({ authenticated: false, token: null })
    }
}

export default new AuthService(apiService, authStore)