//i18n
import { useTranslation } from 'react-i18next';
//alert
import { toast } from 'react-toastify';
import useRegisterSchema from '../../hooks/useRegisterSchema';
import { RegisterSchema } from '../../schemas/registerSchema';
import useHttpUsuario from '../../hooks/useHttpUsuario';

const Register = () => {

  const { t } = useTranslation();

  const { register, handleSubmit, errors } = useRegisterSchema();

  const { handleRegister } = useHttpUsuario();

  const handleRegisterUsuario = async (data: RegisterSchema) => {

    const nome = data.name;
    const email = data.email;
    const senha = data.password;

    const userDados = { nome, email, senha }

    handleRegister(userDados)
    toast.info(`${t('MsgCadastro1')} ${nome} ${t('MsgCadastro2')}`)

  }

  return (
    <div>
      <h3>{t('CrieConta')}</h3>
      <form onSubmit={handleSubmit(handleRegisterUsuario)}>
        <div>
          <label htmlFor="name">{t('nome')}</label>
          <input type="text"
            id="name"
            {...register('name')}
          />
          {errors && <small className="msgErro">{errors.name?.message}</small>}
        </div>
        <div>
          <label htmlFor="email">{t('email')}</label>
          <input type="email"
            id="email"
            {...register('email')}
          />
          {errors && <small className="msgErro">{errors.email?.message}</small>}
        </div>
        <div>
          <label htmlFor="password">{t('senha')}</label>
          <input type="password"
            id="password"
            {...register('password')}
          />
          {errors && <small className="msgErro">{errors.password?.message}</small>}
        </div>
        <div>
          <label htmlFor="confirmpassword">{t('ConfirmarSenha')}</label>
          <input type="password"
            id="confirmpassword"
            {...register('confirmpassword')}
          />
          {errors && <small className="msgErro">{errors.confirmpassword?.message}</small>}
        </div>
        <button type="submit">{t('btnCadastro')}</button>
      </form>
    </div>
  )
}

export default Register