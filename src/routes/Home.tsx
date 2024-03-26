import Orthodontic from "../assets/orthodontic.jpg"

const Home = () => {
    return (
        <section className="flex max-w-screen-lg mx-auto px-4 py-10">
            <div className="w-1/2 flex flex-col items-center justify-center gap-4 px-4">
                <h1 className="font-bebas text-7xl">OdontPro</h1>
                <p className="text-xl text-center">Tu aplicación para la gestión de tus pacientes y documentos.</p>
            </div>
            <div className="w-1/2 ">
                <img className="rounded-3xl shadow-xl" src={Orthodontic} />
            </div>
        </section>
    )
}

export default Home