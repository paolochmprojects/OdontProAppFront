import Orthodontic from "../assets/dental-31726_640.png"

const Home = () => {
    return (
        <section className="flex flex-wrap md:flex-nowrap max-w-screen-lg mx-auto py-10 gap-4">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 px-4">
                <h1 className="font-bebas text-7xl">OdontPro</h1>
                <p className="text-xl text-center">Tu aplicación para la gestión de tus pacientes y documentos.</p>
            </div>
            <div className="w-full md:w-1/2 p-6">
                <img className="invert" src={Orthodontic} />
            </div>
        </section>
    )
}

export default Home