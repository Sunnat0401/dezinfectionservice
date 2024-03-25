import { useTranslation } from 'react-i18next'
import './services.css'
const Services = () => {
     const {t} = useTranslation()
  return (
    <div className="container">
        <div className="services-info" id='service'>
            <h1>{t("services")}</h1>

            <p>{t("services1")} <br /> <br />
             {t("services2")} </p>
        </div>
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="services-wrapper">
          <div className="services-card">
               <img src="/public/virus.png" alt="virus" />
               <div className='service-card__right'>
               <h3>{t("serviceHeading1")}</h3>
               <p>{t("ServiceParagraph1")}.</p>
               </div>
          </div>
          
        </div>
        <div data-aos="fade-right"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine"  className="services-wrapper">
          <div className="services-card">
               <img src="/public/dezqurt.png" alt="virus" />
               <div className='service-card__right'>
               <h3>{t("serviceHeading2")}</h3>
               <p>{t("ServiceParagraph2")}..</p>
               </div>
          </div>
          
        </div>
        <div data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine" className="services-wrapper">
          <div className="services-card">
               <img src="/public/mause.png" alt="virus" />
               <div className='service-card__right'>
               <h3>{t("serviceHeading3")}</h3>
                  <p>{t("ServiceParagraph3")}.</p>
               </div>
          </div>
          
        </div>
        </div>
  )
}

export default Services