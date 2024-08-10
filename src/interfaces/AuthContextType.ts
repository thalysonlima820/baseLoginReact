import { Usuarios } from "./Usuarios";

export interface AuthContextType {
  user: Usuarios | null;
  login: (usu: string, senhaHash: string) => Promise<void>;
  logout: () => void;
}