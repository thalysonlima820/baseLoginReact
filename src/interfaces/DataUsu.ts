import { Usuarios } from './Usuarios';
export type DataUsu = {
    usuarios: Usuarios[]
    addleDelete: (u: Usuarios) => void
}