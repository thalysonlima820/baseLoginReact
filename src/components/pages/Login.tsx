import { useTranslation } from "react-i18next";
import useLoginShema from "../../hooks/useLoginShema";
import { LoginSchema } from "../../schemas/loginSchema";
//Md5
import md5 from 'crypto-js/md5';
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {

  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, errors } = useLoginShema();
  const { login } = useAuth();

  const onSubmit = async (data: LoginSchema) => {
    try {
      const senhaHash = md5(data.password).toString();
      const usuario = data.name;
      await login(usuario, senhaHash);
    } catch (error) {
      setErrorMessage(`${error}`);
    }
  };

  return (
    <div>
      <h1>{t('logar')}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">{t('nome')}</label>
          <input type="text"
            id="name"
            {...register('name')}
           />
           {errors && <small className="msgErro">{errors.name?.message}</small>}
        </div>
        <div>
          <label htmlFor="password">{t('senha')}</label>
          <input type="password"
            id="password"
            {...register('password')}
           />
           {errors && <small className="msgErro">{errors.password?.message}</small>}
        </div>
        <button type="submit">{t('btnlogin')}</button>
      </form>
      {errorMessage && <small className="msgErro">{errorMessage}</small>}
    </div>
  )
}

export default Login