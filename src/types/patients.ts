export interface Patient {
    id: string,
    userId: string,
    name: string,
    email: string | null,
    phone: string | null,
    address: string | null,
    createdAt: Date,
    updatedAt: Date,
    allergies: string[]
}

export interface PatientsData {
    total: number,
    data: Patient[]
}

export interface PatientServiceInterface {
    getall: () => Promise<PatientsData | Error>
    create: (data: string) => Promise<null | Error>
    update: (data: string, id: string) => Promise<null | Error>
    delete: (id: string) => void
}
