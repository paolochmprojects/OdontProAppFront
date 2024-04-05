import { contactService } from "../../../services/contactService"

export const loader = async () => {
    await contactService.getMyContacts()
    return null
}

const Contacts = () => {
    return (<main className="p-4">
        <h1></h1>
    </main >)
}

export default Contacts
