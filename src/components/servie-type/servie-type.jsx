import { useTranslation } from 'react-i18next'

import './servie-type.css'


const ServiceType = () => {
  const {t} = useTranslation()
  return (
    <div className='container'>
      <div>
          <h1 >Xizmat turi </h1>
          <div className="servie-type">
            <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="service-type__card">
                <h3>{t("ServiceTypeHeading1")}</h3>
                <p>{t("ServiceTypeParagraph1")}</p>
                <p>{t("ServiceTypeLessons1")}</p>
                <div className='service-img'>
                <img src="/public/Group.png" alt="" />
                </div>
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="service-type__card">
                <h3>{t("ServiceTypeHeading2")} </h3>
                <p>{t("ServiceTypeParagraph2")}</p>
                <p>{t("ServiceTypeLessons2")}</p>
                <div className='service-img'>
                <img src="/public/Group (1).png" alt="" />
                </div>
            </div>
            <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="service-type__card">
                <h3>{t("ServiceTypeHeading3")}</h3>
                <p>{t("ServiceTypeParagraph3")}</p>
                <p>{t("ServiceTypeLessons3")}</p>
                <div className='service-img'>
                <img src="/public/Group (2).png" alt="" />
                </div>
            </div>
          </div>

      </div>
          
    </div>
  )
}

export default ServiceType