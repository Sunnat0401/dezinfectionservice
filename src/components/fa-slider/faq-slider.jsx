import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTranslation } from 'react-i18next'

import './faq-slider.css'




const AccordionUsage = () => {
  const {t} = useTranslation()

  return (
    <div>
    <Accordion  >
      <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
      
        >
          <Typography marginTop={1} marginBottom={1}> {t("infeksiya1")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
           {t("response1")}
          </Typography>
        </AccordionDetails>
          
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography > {t("infeksiya2")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography marginTop={1} marginBottom={1}>
          {t("response2")}
           
          </Typography>
        </AccordionDetails>
          
      </Accordion>

    </div>
  );
//   return (
    
// //     <div className='muicard'>
// //       <Accordion>
// //         <AccordionSummary
// //           expandIcon={<ExpandMoreIcon />}
// //           aria-controls="panel1-content"
// //           id="panel1-header"
// //         >
      
// // Zararkunandalarni yo'q qilish qanday amalga oshiriladi ?
// //         </AccordionSummary>
// //         <AccordionDetails>
// //      Mavjud asbob uskunalar yoramida intektitsidlar ayrazonli tumanga ayalanadi va devor qog'ozi , devorlar va taxta plitalari orasidagi eng kichik bo'shliqlarga ,ko'zga ko'rinmas xashoratlar uchun potensianal yashirish joylariga kiradi .
// //         </AccordionDetails>
// //       </Accordion>
// //       <Accordion>
// //         <AccordionSummary
// //           expandIcon={<ExpandMoreIcon />}
// //           aria-controls="panel2-content"
// //           id="panel2-header"
// //         >
// //         Siz foydalanadigan dorilar xavflimi ?
// //         </AccordionSummary>
// //         <AccordionDetails>
// //         Preparatlar uy hayvonlar  , odamlar  va o'simliklar uchun havfli emas .Ammo davolashdankeyin honani 40 daqiqadasvomida ventilyatsiya qilish kerak.
// //         </AccordionDetails>
// //       </Accordion>
// //       <Accordion defaultExpanded>
// //         <AccordionSummary
// //           expandIcon={<ExpandMoreIcon />}
// //           aria-controls="panel3-content"
// //           id="panel3-header"
// //         >
// //          Menga umumiy davolsfhga qandaydur yordam kerakmi , tayyorlashning qandaydur usullari kerakmi ?
// //         </AccordionSummary>
// //         <AccordionDetails>
// //         Асосан, идиш-товоқ ва шахсий гигиена воситаларини изолятсия қилишингиз керак. Даволаш пайтида уй ҳайвонлари ҳам изолятсия қилиниши керак. Мебел ёки маиший техникани кўчиришга ҳожат йўқ.
// //         </AccordionDetails>
// //         <AccordionActions>
// //           <Button>Cancel</Button>
// //           <Button>Agree</Button>
// //         </AccordionActions>
// //       </Accordion>
// //     </div>
//   );
}

export default AccordionUsage
