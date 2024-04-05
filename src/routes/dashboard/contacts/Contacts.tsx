import { useLoaderData } from "react-router-dom"
import patientService from "../../../services/patientService"
import { PatientsData } from "../../../types/patients"
import PatientList from "../../../components/patients/patient-list"

export const loader = async () => {
    return await patientService.getall()
}

const Contacts = () => {

    const data = useLoaderData() as PatientsData

    return (<main className="p-4">
        {data instanceof Error ? 
        <></>: 
        <PatientList patientsData={data}/>}
    </main >)
}

export default Contacts
