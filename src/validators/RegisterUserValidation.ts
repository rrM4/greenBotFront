import { z } from 'zod'

const validator = z.object({
    email: z.email("Is not a valid email!").nonempty("Email null"),
    password: z.string().min(6, {message: "The email length has to be greater than 6 characters!"}),
});
export default validator