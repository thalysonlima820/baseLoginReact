//Css
import './App.css'
//Svg
import menu from '../public/menu.svg'
import cruz from '../public/cruz.svg'
//I18n
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
//Link
import { Route, Routes, Link } from 'react-router-dom';
//React
import { useState } from 'react';
//Pages
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Database from './components/pages/admin/Database';
import Login from './components/pages/Login';
//hooks
import { useAuth } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
//alerta
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from './components/pages/admin/Edit';
import Erro404 from './components/pages/Erro404';


function App() {

  const { t } = useTranslation();
  const [menuAtivo, setMenuAtivo] = useState<boolean>(true)
  const { user } = useAuth();

  return (
    <>
      <nav>
        <div className='boxHome'>
          {menuAtivo
            ? (
              <img src={menu} alt="" onClick={() => setMenuAtivo(false)} />
            )
            : (
              <div className='box_nav'>
                <img src={cruz} alt="" onClick={() => setMenuAtivo(true)} />
                <p><Link to='/'>{t('Home')}</Link></p>
                <p>{!user && <Link to='/login'>{t('Login')}</Link>}</p>
                <p><Link to='/dados'>{t('DadosUsu')}</Link></p>
                <p><Link to='/register'>{t('cadastro')}</Link></p>
              </div>
            )
          }
        </div>
        <h1>{t('logo')}</h1>
        <div className='language'>
          <LanguageSwitcher />
        </div>
      </nav>


      <header>
        <div className="conteudo">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dados' element={<PrivateRoute><Database /></PrivateRoute>} />
            <Route path='/register' element={<Register />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<Erro404 />} />
          </Routes>
        </div>
      </header>

      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  )
}

export default App
