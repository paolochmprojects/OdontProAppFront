import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md"
import { type Patient as PatientData } from "../../types/patients"

interface Props {
    patient: PatientData
}

const Patient = ({ patient }: Props) => {
    return (<tr>
        <td className="flex items-center gap-4">
            <img className="w-12 rounded-full" src="https://pixabay.com/get/g3e7205e3c916909d42b44e78f5dd98a533ec25df2ac699310bfa385c33671b2c4254f2ca3acf85263638903a17a706c40334e1faebc146e18213e62c70c031b6d16b088da72fea527ff6912bc58c471c_640.png" alt="user img" />
            {patient.name}
        </td>
        <td>{patient.email}</td>
        <td>{patient.phone}</td>
        <td className="flex items-center gap-2">
            <button className="btn btn-circle btn-primary">
                <MdOutlineEdit size={25} />
            </button>
            <button className="btn btn-circle btn-error">
                <MdDeleteOutline className="invert" size={25} />
            </button>
        </td>
    </tr>)
}

export default Patient