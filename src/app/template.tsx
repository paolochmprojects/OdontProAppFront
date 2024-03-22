import Footer from "@/components/footer"
import NavBar from "@/components/navbar"

const Template = ({children}: {children: React.ReactNode}) =>{
    return (<main>
        <NavBar/>
        {children}
        <Footer/>
    </main>)
}

export default Template