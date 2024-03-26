import { create } from 'zustand'
import settings from '../config/settings'

interface State {
    authenticated: boolean,
    token: string | null,
}

interface Actions {
    signInState: (newToken: State['token']) => void,
    signOutState: () => void
}

const savedToken = window.localStorage.getItem(settings.NAME_KEY_TOKEN)

const authStore = create<State & Actions>((set) => ({
    authenticated: savedToken !== null,
    token: savedToken,
    signInState: (newToken) => set(() => ({ authenticated: true, token: newToken })),
    signOutState: () => set(() => ({ authenticated: false, token: null }))
}))

export default authStore