import { SiginForm, SigupForm } from "../types/sign"
import supabase from "../lib/supabase"


const authService = {

    signIn: async (data: SiginForm) => {
        const { error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password
        });

        if (error) return error;
        return null;
    },

    signInGoogle: async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google"
        });
        
        if (error) return error;
        return null;
    },

    signUp: async (data: SigupForm) => {
        
        if (data.password !== data.confirmPassword) return new Error("Las contraseñas no coinciden.")
        
        const { error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password
        })
        
        // TODO: Create contact by default.
        if (error) return error;
        return null;
    },

    signOut: async () => {
        await supabase.auth.signOut()       
    }
}

export default authService