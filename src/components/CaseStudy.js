import gif from '../images/gifmgr.gif'
import mgr1 from '../images/mgr1.webp'
import mgr2 from '../images/mgr2.webp'
import arrow1 from '../images/arrow1.svg'
import arrow2 from '../images/arrow2.svg'
import gifDonapp from '../images/gifFinal.gif'
import d1 from '../images/d1.webp'
import d2 from '../images/d2.webp'
import boar1 from '../images/boar1.webp'
import boar2 from '../images/boar2.webp'
import boar3 from '../images/boar3.webp'
import ebalance1 from '../images/ebalance1.webp'
import ebalance2 from '../images/ebalance2.webp'
import ebalance3 from '../images/ebalance3.webp'
import '../styles/caseStudy.css'
import Cases from './cases'
import CasesMobile from './casesMobile'
import { useEffect, useState } from 'react'

const CaseStudy = () => {
    const [currentCase, setCurrentCase] = useState(0);

    const goToNextCase = () => {
        setCurrentCase((prevCase) => {
            return prevCase === cases.length - 1 ? 0 : prevCase + 1;
        });
    };

   
    useEffect(() => {
        const interval = setInterval(goToNextCase, 20000); 
        return () => clearInterval(interval);
    }, []);

    const handleArrowClick = (direction) => {
        if (direction === 'prev') {
          setCurrentCase((prevCase) => {

            return prevCase === 0 ? cases.length - 1 : prevCase - 1;
          });
        } else if (direction === 'next') {
          setCurrentCase((prevCase) => {
            return prevCase === cases.length - 1 ? 0 : prevCase + 1;
          });
        }
      };

    const cases = [
        {
            caseStudyP: 'mgr sport redesign',
            caseStudySub: 'BRANDING',
            caseStudyT: 'Re-Branding MGR SPORT, a local sports brand in Uruguay, to infuse it with heightened dynamism and a focus on movement. ',
            caseStudyI: 'For this redesign, we concentrated on sports popular in Uruguay, as the brand was previously associated only with football. With this MGR rebranding, the goal is to expand across all sports, encouraging consumers to join a sports community that fosters feelings of security, reliability, and well-being.',
            img1: mgr1,
            img2: mgr2,
            gif: gif,
            link:"https://www.behance.net/gallery/144326317/MGR-Sport"
        },
        {
            caseStudyP: 'DONAPP',
            caseStudySub: 'UX/UI',
            caseStudyT: 'Donapp is an application aimed at promoting blood donation and providing assistance to the community.',
            caseStudyI: 'Through a system of incentives and achievements and badges, we encourage blood donation. This project was conceived during the COVID-19 pandemic due to the shortage of blood in blood banks.',
            img1: gifDonapp,
            img2: d1,
            gif: d2,
            link:"https://www.behance.net/gallery/100876611/DonApp"   
        },
        {
            caseStudyP: 'BOAR',
            caseStudySub: 'BRANDING-PHOTOGRAPH-VIDEO-UX/UI',
            caseStudyT: 'Creation of the complete image for a craft beer to launch in the market.',
            caseStudyI: 'Through photographs, videos, social media posts, and an e-commerce platform, Boar was introduced as a beer that creates a unique experience with natural flavors',
            img1:boar1,
            img2: boar2,
            gif: boar3,
            link:"https://www.behance.net/gallery/144309983/Boar-Cerveza-Natural"  
        },{
            caseStudyP: 'E-BALANCE',
            caseStudySub: 'Product design - UX/UI',
            caseStudyT: 'Preventing food waste is a collective responsibility.',
            caseStudyI:"It's a series of smart kitchen products designed to uphold order, hygiene, and most importantly, prevent food wastage within the household",
            img1:ebalance1,
            img2: ebalance2,
            gif: ebalance3,
            link:"https://www.behance.net/gallery/144409317/eBalance-App"  
        }
        
    ];

    const currentCaseData = cases[currentCase];

    return (
        <>

            <Cases
                caseStudyP={currentCaseData.caseStudyP}
                caseStudySub={currentCaseData.caseStudySub}
                caseStudyT={currentCaseData.caseStudyT}
                caseStudyI={currentCaseData.caseStudyI}
                img1={currentCaseData.img1}
                img2={currentCaseData.img2}
                gif={currentCaseData.gif}
                caseStudyLink={currentCaseData.link}
            />
         
            
                <CasesMobile
                 caseStudyP={currentCaseData.caseStudyP}
                 caseStudySub={currentCaseData.caseStudySub}
                 caseStudyT={currentCaseData.caseStudyT}
                 caseStudyI={currentCaseData.caseStudyI}
                 img1={currentCaseData.img1}
                 img2={currentCaseData.img2}
                 gif={currentCaseData.gif}
                 caseStudyLink={currentCaseData.link}
                 />
            
            <div className='arrows'>
                <img src={arrow1} onClick={() => handleArrowClick('prev')} />
                <img src={arrow2} onClick={() => handleArrowClick('next')} />
            </div>
        </>
    );
};

export default CaseStudy