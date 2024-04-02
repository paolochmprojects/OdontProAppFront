export interface SiginForm {
    email: string,
    password: string
}

export interface SigupForm extends SiginForm{
    confirmPassword: string
    name: string
}