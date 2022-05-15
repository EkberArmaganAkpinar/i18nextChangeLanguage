import './App.css';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  }
]
function App() {
  const { t } = useTranslation()
  return (
    <div className="container">
      <div className='d-flex justify-content-end'>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
              <button class="dropdown-item" onClick={()=>i18next.changeLanguage(code)}>{name}</button>
        
              </li>
            ))}

          </div>
        </div>
      </div>
      <div className='d-flex flex-column align-items-start'>
        <h1>{t('welcome_message')}</h1>
      </div>
    </div>
  );
}

export default App;
