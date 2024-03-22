import { z } from "zod"

export const SignUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(32), 
    confirmPassword: z.string().min(8).max(32), 
    name: z.string().min(2), 
}) 