import { Link, NavLink, Form } from "react-router-dom";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const DashNavBar = () => {

    const [openMenu, setOpenMenu] = useState(true)

    const toogleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (<header>
        <nav className="navbar bg-base-100 mx-auto p-4 justify-between">
            <div className="gap-4">
                <button className="flex items-center" onClick={() => toogleMenu()}>
                    {openMenu ? <MdClose size={30} /> : <GiHamburgerMenu size={30} />}
                </button>
                <Link to="/dashboard">
                    <h1 className="font-bebas text-4xl">OdontPRO</h1>
                </Link>
            </div>
            <ul className="menu menu-horizontal px-1">
                <Form method="POST" action="/signout">
                    <button>
                        Cierra Sesion
                    </button>
                </Form>
            </ul>
        </nav>
        <ul className={`absolute z-50 left-0 right-0 bottom-0 p-4 top-16 bg-base-100 flex justify-center items-center gap-6 flex-wrap ${openMenu ? "opacity-100" : "opacity-0"}`}>
            <li>
                <NavLink to="/dashboard"
                    className="card w-52 h-52 flex items-center justify-center shadow-lg p-6 bg-base-300 hover:bg-base-200 gap-4"
                    onClick={() => toogleMenu()}>
                    <MdOutlineDashboard className="mx-auto" size={100} />
                    <p className="text-center">Panel de control</p>
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/contacts"
                    className="card w-52 h-52 flex items-center justify-center shadow-lg p-6 bg-base-300 hover:bg-base-200 gap-4"
                    onClick={() => toogleMenu()}>
                    <IoMdContacts className="mx-auto" size={100} />
                    <p className="text-center">Mis contactos</p>
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/periodontgrams"
                    className="card w-52 h-52 flex items-center justify-center shadow-lg p-6 bg-base-300 hover:bg-base-200 gap-4"
                    onClick={() => toogleMenu()}>
                    <GrNotes className="mx-auto" size={100} />
                    <p className="text-center">Periodontogramas</p>
                </NavLink>
            </li>
        </ul>
    </header>)
}

export default DashNavBar
