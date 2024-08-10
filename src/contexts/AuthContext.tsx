//I18n
import { useTranslation } from 'react-i18next';
//React
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext, createContext } from "react";
//Type
import { AuthProviderProps } from '../interfaces/AuthProviderProps';
import { AuthContextType } from "../interfaces/AuthContextType";
import { Usuarios } from "../interfaces/Usuarios";
//Api
const Api = import.meta.env.VITE_API_URL;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [user, setUser] = useState<Usuarios | null>(() => {
        const savedUserData = localStorage.getItem('login_teste');
        return savedUserData ? JSON.parse(savedUserData) : null;
    });

    const login = async (usu: string, senhaHash: string) => {
        try {
            const { data } = await axios.get(`${Api}/lista`);

            const verificar = data.find((usuario: Usuarios) => usuario.nome === usu && usuario.senha === senhaHash);
        
            if (verificar) {
                toast.success(`${t('MsgLogin')}`);
                setUser(verificar);
                localStorage.setItem('login_teste', JSON.stringify(verificar));
                navigate('/');
            } else {
                throw new Error('Credenciais inválidas');
            }
        } catch (error) {
            toast.error(`${t('MsgErro')}`);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('login_teste');
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            logout();
        }, 1000000);
    
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
