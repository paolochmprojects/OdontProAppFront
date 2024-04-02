import { create } from 'zustand'
import settings from '../config/settings'

const config = settings()

interface State {
    authenticated: boolean,
    token: string | null
}

interface Actions {
    signInState: (token: string) => void,
    signOutState: () => void
}

const tokenStore = window.localStorage.getItem(config.VITE_TOKEN_KEY)

const authStore = create<State & Actions>((set) => ({
    token: tokenStore,
    authenticated: tokenStore != null,
    signInState: (token) => set(() => ({ authenticated: true, token })),
    signOutState: () => set(() => ({ authenticated: false, token: null }))
}))

export default authStore