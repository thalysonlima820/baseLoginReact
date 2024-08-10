//i18n
import { useTranslation } from 'react-i18next';

//Rotas
import { Link } from 'react-router-dom';
const Erro404 = () => {
    const { t } = useTranslation();
  return (
    <div>
        <h1>{t('Erro404')}</h1>
        <Link to='/'>{t('Home')}</Link>
    </div>
  )
}

export default Erro404