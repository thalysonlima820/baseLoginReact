import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AuthProviderProps } from '../interfaces/AuthProviderProps';
const PrivateRoute = ({ children }: AuthProviderProps) => {
    
    const { user } = useAuth();

    if (!user) {
      return <Navigate to="/Login" />;
    }

  return children;
}

export default PrivateRoute