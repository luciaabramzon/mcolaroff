import gif from '../images/mgr.gif'
import mgr1 from '../images/mgr1.webp'
import mgr2 from '../images/mgr2.webp'
import arrow1 from '../images/arrow1.svg'
import arrow2 from '../images/arrow2.svg'
import gifDonapp from '../images/gifFinal.gif'
import d1 from '../images/d1.webp'
import d2 from '../images/d2.webp'
import boar1 from '../images/boar1.svg'
import boar3 from '../images/boar3.svg'
import '../styles/caseStudy.css'
import Cases from './cases'
import CasesMobile from './casesMobile'
import { useState } from 'react'

const CaseStudy = () => {
    const [currentCase, setCurrentCase] = useState(0);

    const handleArrowClick = (direction) => {
        if (direction === 'prev') {
            setCurrentCase(currentCase - 1);
        } else if (direction === 'next') {
            if (currentCase === cases.length - 1) {
                setCurrentCase(0); 
            } else {
                setCurrentCase(currentCase + 1);
            }
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
            gif: gif
        },
        {
            caseStudyP: 'DONAPP',
            caseStudySub: 'UX/UI',
            caseStudyT: 'Donapp is an application aimed at promoting blood donation and providing assistance to the community.',
            caseStudyI: 'Through a system of incentives and achievements and badges, we encourage blood donation. This project was conceived during the COVID-19 pandemic due to the shortage of blood in blood banks.',
            img1: gifDonapp,
            img2: d1,
            gif: d2   
        },
        {
            caseStudyP: 'BOAR',
            caseStudySub: 'BRANDING-PHOTOGRAPH-VIDEO-UX/UI',
            caseStudyT: 'Creation of the complete image for a craft beer to launch in the market.',
            caseStudyI: 'Through photographs, videos, social media posts, and an e-commerce platform, Boar was introduced as a beer that creates a unique experience with natural flavors',
            img1:boar1,
            img2: d1,
            gif: boar3,  
        }
        
    ];

    const currentCaseData = cases[currentCase];

    return (
        <>
        <div className='itemWeb'>
            <Cases
                caseStudyP={currentCaseData.caseStudyP}
                caseStudySub={currentCaseData.caseStudySub}
                caseStudyT={currentCaseData.caseStudyT}
                caseStudyI={currentCaseData.caseStudyI}
                img1={currentCaseData.img1}
                img2={currentCaseData.img2}
                gif={currentCaseData.gif}
            />
            </div>
            <div className='itemMobile'>
                <CasesMobile
                 caseStudyP={currentCaseData.caseStudyP}
                 caseStudySub={currentCaseData.caseStudySub}
                 caseStudyT={currentCaseData.caseStudyT}
                 caseStudyI={currentCaseData.caseStudyI}
                 img1={currentCaseData.img1}
                 img2={currentCaseData.img2}
                 gif={currentCaseData.gif}
                 />
            </div>
            <div className='arrows'>
                <img src={arrow1} onClick={() => handleArrowClick('prev')} />
                <img src={arrow2} onClick={() => handleArrowClick('next')} />
            </div>
        </>
    );
};

export default CaseStudy