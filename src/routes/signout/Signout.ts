import { redirect } from "react-router-dom"
import authService from "../../services/authService"

export const action = async () =>{
    await authService.signOut()
    localStorage.clear()
    return redirect("/signin")
}