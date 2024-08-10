import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [idioma, setIdioma] = useState<string>('pt')

  useState(() => {
    setIdioma(i18n.language)
  });


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdioma(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>

      <form>
        <select value={idioma} onChange={handleChange} >
          <option value="pt">Português</option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </form>

    </div>
  );
};

export default LanguageSwitcher;
