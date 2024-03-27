import { create } from 'zustand'

interface State {
    authenticated: boolean,
}

interface Actions {
    signInState: () => void,
    signOutState: () => void
}


const authStore = create<State & Actions>((set) => ({
    authenticated: false,
    signInState: () => set(() => ({ authenticated: true })),
    signOutState: () => set(() => ({ authenticated: false }))
}))

export default authStore