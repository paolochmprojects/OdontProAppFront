import { periodontgramService } from "../../../services/periodontgramService"

export const loader = async () => {
    await periodontgramService.getAll()
    return null
}

const Periodontgrams = () => {
    return (<main className="p-4">
        <h1>Periodontgrams</h1>
    </main>)
}

export default Periodontgrams