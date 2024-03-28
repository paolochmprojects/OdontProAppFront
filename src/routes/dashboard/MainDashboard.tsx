import { redirect } from "react-router-dom"
import authStore from "../../stores/auth"

export const loader = async () => {
    if (!authStore.getState().authenticated) return redirect("/signin")
    return null
}

const MainDashboard = () => {

    return (<main>
        <h1>Dashboard</h1>
    </main>)
}

export default MainDashboard