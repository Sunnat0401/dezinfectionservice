import { useTranslation } from 'react-i18next'

import './connection.css'
const Connection = () => {
  const {t} = useTranslation()
  return (
    <div className='container'>
        <div className="connection" id='connection'>
            <div  data-aos="zoom-in-right" className="connection-login">
                <h2>{t("connectionHeading")} </h2>
              <form action="">
              <input className='input-name' type="text" placeholder={t("connectionName")} />
                <input className='input-name' type="text"  placeholder='+ 998 90 124 94 84  '/>
              </form>
                <button className='connection-button'>{t("send")}</button>
            </div>
            <img data-aos="zoom-out" src="/public/connection.png" alt="image" />

            </div>        
    </div>
  )
}

export default Connection