import translationsEn from "../../locale/translationsEn.js"
import translationsUz from "../../locale/translationsUz.js"
import About from "../about/about.jsx"
import Connection from "../connection/connection.jsx"
import Faq from "../faq/faq.jsx"
import Footer from "../footer/footer.jsx"
import Home from "../home/home.jsx"
import Navbar from "../navbar/navbar"
import ServiceTypeFooter from "../service-type-footer/service-type-footer.jsx"
import Services from "../services/services.jsx"
import ServiceType from "../servie-type/servie-type.jsx"

import i18n from "i18next";
// import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
  // console.log(i18n.use(initReactI18next));
 i18n.use(initReactI18next).init({
  resources:{
    en:{translation: translationsEn},
    uz:{translation: translationsUz},
  },
  lang: "en", 
  fallbackLng : "en "
})
const App = () => {
  const changeLang =(value) =>{
    i18n.changeLanguage(value)
  }
  return (
    <div>
      <Navbar changeLang={changeLang}/>
      <Home/>
      <About/>
      <Services/>
      <ServiceType/>
      <ServiceTypeFooter/>
      <Faq/>
      <Connection/>
      <Footer/>
    </div>
  )
}

export default App