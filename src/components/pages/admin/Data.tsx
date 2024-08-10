//I18n
import { useTranslation } from 'react-i18next';
//Type
import { DataUsu } from '../../../interfaces/DataUsu'
//Rotas
import { Link } from "react-router-dom";

const Data = ({usuarios, addleDelete}: DataUsu) => {

  const { t } = useTranslation();

  return (
    <div className='usuarios'>
        {usuarios.map((usuario) => (
        <div key={usuario.id} className='dadosUsuario'>
            <p> Nome: {usuario.nome}</p>
            <p> Email: {usuario.email}</p>
            <button onClick={() => addleDelete(usuario)}>{t('Delete')}</button>
            <button> <Link to={`/edit/${usuario.id}`}>{t('Edit')}</Link></button>
        </div>
      ))}
    </div>
  )
}

export default Data