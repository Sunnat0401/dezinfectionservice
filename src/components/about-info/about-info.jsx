import { useTranslation } from 'react-i18next'
import './about-info.css'
const AboutInfo = () => {
  const {t} = useTranslation()
  return (
    <div className="container">
                  <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="about-footer">
                <div className='about-footer__empty'></div>
                <div className="about-footer__info">
                  <div>
                    <h2   >{t("consider")} </h2>
                  </div>
                  <div>
                    <p>{t("considerp")}</p>

                  </div>
                  <div className="navbar-button"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
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

export default AboutInfo