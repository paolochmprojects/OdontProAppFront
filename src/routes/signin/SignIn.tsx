import { Form, redirect, useActionData, useNavigate } from "react-router-dom"
import { SiginForm } from "../../types/sign"
import authService from "../../services/authService"
import authStore from "../../stores/auth"

export const loader = async () => {
    if (authStore.getState().authenticated) return redirect("/")
    return null
}

export const action = async ({ request }: { request: Request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    const userCredentials: SiginForm = {
        email: data.email as string,
        password: data.password as string
    }

    const err = await authService.signIn(userCredentials)
    if (err === null) return redirect("/")
    return err
}

const SignIn = () => {

    const navigate = useNavigate()
    const err = useActionData()

    return (<main>
        <div className="max-w-screen-lg mx-auto p-4">
            <div className="card shadow-lg max-w-lg p-10 mx-auto">
                <Form className="flex flex-col gap-8" method="POST">
                    <h1 className="card-title font-bebas text-4xl">Inicia Sesión</h1>
                    {err instanceof Error && <div role="alert" className="alert alert-error" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! {err.message}</span>
                    </div>}
                    <div>
                        <label htmlFor="">Correo:</label>
                        <input id="email"
                            className="input input-bordered w-full"
                            type="email"
                            name="email"
                            required />
                    </div>
                    <div>
                        <label htmlFor="">Contraseña:</label>
                        <input id="password"
                            className="input input-bordered w-full"
                            type="password"
                            name="password"
                            required />
                    </div>
                    <div className="card-actions">
                        <button type="submit"
                            className="btn btn-primary w-full">Ingresa</button>
                        <button type="button"
                            className="btn btn-outline w-full"
                            onClick={() => navigate("/signup")}>No tienes cuenta?</button>
                    </div>
                </Form>
            </div>
        </div>
    </main>)
}

export default SignIn