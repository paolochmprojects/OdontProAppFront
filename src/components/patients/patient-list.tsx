import { PatientsData } from "../../types/patients"
import Patient from "./patient"

interface Props {
    patientsData: PatientsData
}

const PatientList = ({ patientsData }: Props) => {

    const { data } = patientsData

    return (<>
        <div className="mb-4 flex gap-2">
            <button className="btn btn-primary">+ Nuevo</button>
            <input type="text" className="input input-bordered"/>
            <button className="btn btn-primary">Buscar</button>
        </div>
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Móvil</th>
                        <th className="w-36">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(patient => <Patient key={patient.id} patient={patient}/>)}
                </tbody>
            </table>
        </div>
        {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map(patient => (<Patient key={patient.id} patient={patient} />))}
        </div> */}
    </>)
}

export default PatientList