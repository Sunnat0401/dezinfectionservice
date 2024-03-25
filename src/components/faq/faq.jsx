import * as React from 'react';
import './faq.css'
import AccordionUsage from '../fa-slider/faq-slider';
const Faq = () => {
  return (
    <div className='container'>
          <div className="faq" id='faq'>
            <h1>Faq</h1>
          <div className='faq-accordions'><AccordionUsage/></div>
          </div>
    </div>
  )
}

export default Faq