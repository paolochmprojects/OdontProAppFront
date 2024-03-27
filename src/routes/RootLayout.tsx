import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import supabase from "../lib/supabase"
import { useEffect } from "react"
import authStore from "../stores/auth"

const RootLayout = () => {
    const { signInState, signOutState } = authStore()
    
    useEffect(() => {
        supabase.auth.onAuthStateChange((event) => {
            if (event === "SIGNED_IN") {
                signInState()
            }
            if (event === "SIGNED_OUT") {
                signOutState()
            }
        })
    })
    return (<div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />
    </div>)
}

export default RootLayout