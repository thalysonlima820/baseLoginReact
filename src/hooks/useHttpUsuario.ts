//React
import { useEffect, useState } from "react";
import { Usuarios } from "../interfaces/Usuarios";
import axios from "axios";
//Api
const Api = import.meta.env.VITE_API_URL;

type operationProps = "add" | "delete" | "update"

const useHttpUsuario = () => {

    const [usuarios, setUsuarios] = useState<Usuarios[]>([])
    const [error, SetError] = useState('')

    const handleSuccess = (dados: Usuarios, option: operationProps) => {
        if (option === "add") {
            setUsuarios((dadosUsuario) => [dados, ...dadosUsuario])
        } else if (option == "delete") {
            setUsuarios((dadosUsuario) => dadosUsuario.filter((u) => u.id !== dados.id))
        } else if (option == "update") {
            setUsuarios((dadosUsuario) => [dados, ...dadosUsuario])
        }
    }

    const handleUsuario = async () => {
        try {
            const Data = await axios.get(`${Api}/lista`)
            setUsuarios(Data.data);
        } catch (error) {
            SetError(`Erro Ao acessar Api ${error}`)
        }
    }

    const handleRegister = async (userDados: Usuarios) => {
        try {
            const dados = await axios.post(
                `${Api}/adicionar`,
                userDados
            )
            handleSuccess(dados.data, "add")
        } catch (error) {
            SetError(`Erro Ao acessar Api ${error}`)
        }
    }

    const handleEdit = async (useDados: Usuarios, id: number) => {
        try {
            const Edit = await axios.put(
                `${Api}/atualiza/${id}`,
                useDados
            )
            handleSuccess(Edit.data, "update")
        } catch (error) {
            SetError(`Erro Ao acessar Api ${error}`)
        }
    }

    const handleDelete = async (userId: Usuarios) => {
        try {
            await axios.get(
                `${Api}/remover/${userId.id}`
            );
            handleSuccess(userId, "delete");
        } catch (error) {
            SetError(`Erro Ao acessar Api ${error}`)
        }
    }

    useEffect(() => {
        handleUsuario()
    }, [])

    return { usuarios, error, handleRegister, handleEdit, handleDelete }
}

export default useHttpUsuario;