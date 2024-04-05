import apiService, { ApiServiceInterface } from "./apiService";
import settings from "../config/settings";
import { PatientServiceInterface, PatientsData } from "../types/patients";

const config = settings()

const patientUrl = config.VITE_API_URL + "patient"

class PatientService implements PatientServiceInterface {
    constructor(private apiService: ApiServiceInterface) { }
    async getall(): Promise<PatientsData| Error> {
        const resData = await this.apiService.get<PatientsData>(patientUrl)
        if (resData instanceof Error) return resData
        return resData
    }
    async create(data: string):Promise<Error | null>{
        console.log(data)
        return null
    }
    async update(data: string, id: string):Promise<Error | null>{
        console.log(data, id)
        return null
    }
    async delete (id: string) {
        console.log(id)
    }

}

export default new PatientService(apiService)