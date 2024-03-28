import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
import { useEffect } from "react"
import supabase from "../../lib/supabase"
import authStore from "../../stores/auth"
import DashNavBar from "../../components/DashNavbar"

const DashLayout = () => {
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
    },[])

    return (<div className="flex flex-col min-h-screen">
        <DashNavBar />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />
    </div>)
}

export default DashLayout