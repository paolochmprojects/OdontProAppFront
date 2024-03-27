import { Link, NavLink } from "react-router-dom"
import authStore from "../stores/auth"
import authService from "../services/authService"

const Navbar = () => {

    const { authenticated } = authStore()

    return (
        <header>
            <nav className="navbar bg-base-100 max-w-screen-lg mx-auto p-4 justify-between">
                <Link to="/">
                    <h1 className="font-bebas text-3xl">OdontPro</h1>
                </Link>
                <ul className="menu menu-horizontal px-1">
                    {authenticated ?
                        <>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            <li><button onClick={() => authService.signOut()}>Cierra Sesion</button></li>
                        </>
                        :
                        <>
                            <li><NavLink to="/signin">Inicia Sesión</NavLink></li>
                            <li><NavLink to="/signup">Registrate</NavLink></li>
                        </>}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar