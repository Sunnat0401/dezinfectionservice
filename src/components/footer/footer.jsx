import { useTranslation } from 'react-i18next'

import './footer.css'
const Footer = () => {
  const {t} = useTranslation()
  return (
    <div className='container'>
      <div className="footer-wrapper">
      <a href="#">  <img   src="/public/logo-dez.png" alt="logo" /></a>
        <div className="footer-info">
          <div  className='flex'>
          <span>
            <i class="fa-solid fa-location-dot"></i>
            </span>
            <p>{t("footer")}</p>
            <span  className='span'><i class="fa-solid fa-arrow-up-long"></i></span>
          </div>
           <div className='flex'>
                     <span>
            <i class="fa-solid fa-phone"></i>
            </span>
            <p>+ 998 90 124 94 84  </p>
            <span className='span'><i class="fa-solid fa-arrow-up-long"></i></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer