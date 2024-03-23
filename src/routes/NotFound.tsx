import ToothFail from "../assets/toothfail.png"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const NotFound = () => {
    return (<div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col justify-center items-center gap-3">
            <img className="w-60" src={ToothFail} alt="Tooth fail img" />
            <h1 className="font-bebas text-9xl">404</h1>
            <h2 className="font-bebas text-4xl">Página no</h2>
            <h2 className="font-bebas text-4xl">encontrada</h2>
        </main>
        <Footer />
    </div>)
}

export default NotFound