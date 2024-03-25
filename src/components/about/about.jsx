// import AboutItem from '../about-item/about-item'
import { useTranslation } from 'react-i18next'
import AboutInfo from '../about-info/about-info'
import './about.css'
const About = () => {
        const {t} = useTranslation()
  return (
    <div className="about" id='about'> 
      <div className="container">
            <div className='black'>
                <h2 data-aos="fade-right" className='about-title' >{t("aboutt")}</h2>
            </div>
            <br />
            <hr />
               <div className="wrapper-card">
               <div data-aos="flip-left"  data-aos-duration="1000" className="about-cards">
                    <div className="about-card">
                    <div >
                    <i className='about-card__icon' class="fa-solid fa-bolt"></i>
                            <h3 class="about_card_title">{t("aboutHeading1")}</h3>
                            <p class="about_card_text">{t("aboutInfo1")}</p>
                    </div>
                    </div>
            </div>
            <div data-aos="flip-right"   data-aos-duration="2000" className="about-cards">
                    <div className="about-card">
                    <div >
                    <i  className='about-card__icon' class="fa-solid fa-mug-saucer"></i>
                            <h3 class="about_card_title">{t("aboutHeading2")}</h3>
                            <p class="about_card_text">{t("aboutInfo2")}</p>
                    </div>
                    </div>
            </div>
            <div  data-aos="flip-up"    data-aos-duration="3000" className="about-cards">
                    <div className="about-card">
                    <div >
                    <i  className='about-card__icon' class="fa-solid fa-handshake"></i>
                            <h3 class="about_card_title">{t("aboutHeading3")}</h3>
                            <p class="about_card_text">{t("aboutInfo3")}</p>
                    </div>
                    </div>
            </div>
               </div>
              <AboutInfo/>
             
          </div>
    </div>

 
 )
   
}

export default About