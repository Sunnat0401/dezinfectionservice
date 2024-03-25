import { useTranslation } from 'react-i18next'
import './service-type-footer.css'
const ServiceTypeFooter = () => {
  const {t} = useTranslation()
  return (
    <div className='container'>
            <div className="service-footer">
                <img src="/public/servifooter.png" alt="servifoter" />
                <div className='servie-footer__info'>
                    <img src="/public/3dicons.svg" alt="icon" />
                        <h1 data-aos="fade-left"> {t("info1")} <br />{t("info2")} <br />{t("info3")} </h1>
                        <div className="navbar-button"  data-aos="flip-up">
                                <a href="#connection">
                                <button className='navbar-link__button' >
                                      {t("contact")}
                                 </button>
                                </a>
                               </div>
                </div>
            </div>
    </div>
  )
}

export default ServiceTypeFooter