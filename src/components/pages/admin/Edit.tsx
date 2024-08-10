import {useEffect, useState} from 'react'
//rotas
import { useParams } from 'react-router-dom'
//i18n
import { useTranslation } from 'react-i18next';
//api
import axios from 'axios';
const api = import.meta.env.VITE_API_URL;
//hook
import { toast } from 'react-toastify';
//rotas
import { useNavigate } from 'react-router-dom';
import useHttpUsuario from '../../../hooks/useHttpUsuario';
const Edit = () => {
    const {id} = useParams();
    const { t } = useTranslation();
    const { handleEdit } = useHttpUsuario();
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        const Edit = async () => {
            const pesquisa = await axios.get(`${api}/lista/${id}`)
            setNome(pesquisa.data.nome)
            setEmail(pesquisa.data.email)
        }
        Edit()
    },[id])

    const handleEditEnv = async (event: React.FormEvent) => {
        event.preventDefault()

        const DadosEdit = {nome, email, senha}

        handleEdit(DadosEdit, id)
        toast.info(`${t('MsgEdit1')}`)
        navigate('/')
    }

  return (
    <div>
        <h3>{t('EditUs')} {id}</h3>
        
        <form onSubmit={handleEditEnv}>
            <div>
                <label>{t('nome')}</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div>
                <label>{t('email')}</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>{t('senha')}</label>
                <input type="password"  onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <button type='submit'>{t('Edit')}</button>
        </form>
    </div>
  )
}

export default Edit