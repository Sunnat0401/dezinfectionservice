import AnchorTemporaryDrawer from '../hamburger'
import './navbar.css'
import { useTranslation } from 'react-i18next'
const Navbar = ({changeLang}) => {
  const {t} = useTranslation()
  const changeLanguageHandler= (e) =>{
    changeLang(e.target.value)
  }
  return (
    <div>
        
        <div className="container">
            <div className="navbar">
                <a href="#" className='navbar-logo'>
                   <img  src="/public/logo-dez.png" alt="This is the logo"/>
                </a>
                <div className="navbar-box" >
                        <div className="navbar-navigation">
                            <a className='navbar-box__link' href="#">{t("main")}</a>
                            <a className='navbar-box__link' href="#about">{t("about")} </a>
                            <a className='navbar-box__link' href="#service">{t("services")}</a>
                            <a className='navbar-box__link' href="#faq">{t("faq")}</a>
                        </div>
                        <div className="navbar-navigation-right">
                        <div className='navbar-drapdown'>
                          <select onChange={changeLanguageHandler}  className='navbar-drapdown__lang'>
                            <option  value="uz">Uzbek</option>
                            <option  value="en">English</option>
                            </select>
                          </div>
                               <div className="navbar-button">
                                <a href="#connection">
                                <button className='navbar-link__button' >
                                    {t("contact")}
                                 </button>
                                </a>
                               </div>
                               <div className='humburger'>
                                <AnchorTemporaryDrawer />
                               </div>
                        </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar

