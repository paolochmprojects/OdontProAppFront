import { redirect } from "react-router-dom"
import authService from "../../services/authService"

export const action = async () =>{
    authService.signOut()
    return redirect("/signin")
}