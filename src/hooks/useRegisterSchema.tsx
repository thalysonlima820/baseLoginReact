import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { RegisterSchema, registerSchema } from "../schemas/registerSchema"

const useRegisterSchema = () => {

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema)
    });

    return { register, handleSubmit, errors }
}

export default useRegisterSchema