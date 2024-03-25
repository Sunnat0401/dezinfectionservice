import { useTranslation } from 'react-i18next'
import './home.css'
const Home = () => {
     const {t} = useTranslation()
  return (
    <div className="container">
    <div className="home-section"> 
         <section className='section-left'>
          <div className="section-card">
               <div className='section-card__info'>
               <h1 data-aos="fade-right">{t("disinfection")} </h1>
               </div>
               <div className="section-card__home">
               <div className="section-card__department">
               <p   data-aos="fade-right"
                       data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                         class="section-card__info">{t("dezinfo")}</p>
               </div>
               <div className="section-card__image">
               <img   src="/public/dezplay3.png" alt="image"/>
               </div>
               </div>
          </div>
          <div  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"className="navbar-button home-button ">
                      <a href="#connection">
                      <button className='navbar-link__button section-btn-home' >
                           {t("contact")}
                       </button>
                      </a>
                     </div>
          </section>
       <section className='section-right' data-aos="flip-right">
             <img src="/public/dezplay.jpg" alt="Main image"/>
         </section>
    </div>
  </div>
  )
}

export default Home