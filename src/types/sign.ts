export interface SiginForm {
    email: string,
    password: string
}

export interface SigupForm extends SiginForm{
    name: string,
    confirmPassword: string
}