import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/AuthContext"
//navigate
import { useNavigate } from "react-router-dom";

const Home = () => {

  const { t } = useTranslation();
  const {user, logout} = useAuth();
  const navigate = useNavigate();

  const Sair = () => {
    logout()
    navigate('/Login');
  }

  return (
    <div className="home">
      {user ? (
        <div>
        <h3>{t('bv')} {user.nome} <button onClick={() => Sair()}>{t('sair')}</button></h3>
        <br /><br />
        </div>
        ) : (
          <div>
            <h1>{t('Faca')}</h1>
          </div>
        )}
    </div>
  )
}

export default Home