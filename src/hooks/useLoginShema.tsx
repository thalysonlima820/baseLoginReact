import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginSchema, loginSchema } from "../schemas/loginSchema"

const useLoginShema = () => {

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    });

    return { register, handleSubmit, errors }
}

export default useLoginShema