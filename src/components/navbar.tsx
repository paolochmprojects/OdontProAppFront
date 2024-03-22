'use client'

import Link from "next/link"

const NavBar = () => {
    return (<nav>
        <div className="navbar bg-base-100 max-w-screen-lg mx-auto">
            <Link href={"/"} className="font-bebas">
                OdontPro
            </Link>
            <ul>
                <li>
                    <Link href={`/signin`}>Inicio sesión</Link>
                </li>
                <li>
                    <Link href={`/signup`}>Registro</Link>
                </li>
            </ul>
        </div>
    </nav>)
}

export default NavBar