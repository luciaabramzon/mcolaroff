import '../../styles/uxui.css'
import '../../styles/animation.css'
import NavExpertise from './NavExpertise'
import elipse from '../../images/circleLoader.svg'
import ProjectRight from './ProjectRight'
import ProjectLeft from './ProjectLeft'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader'
import boarUx from '../../images/boarux.svg'
import donapp from '../../images/donapUx.webp'
import Yendo from '../../images/yendoUx.webp'
import ebalance from '../../images/ebalanceUx.webp'
import CardsContent from '../cardsContent'
import First from './first'
import sandbox from '../../images/sandbox.webp'


const UXUI=()=>{
    const [isLoading, setLoading] = useState(true);
    const location = useLocation();
    useEffect(() => {
    
        const loadingTimeout = setTimeout(() => {
          setLoading(false);
        }, 1000);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    
        return () => {
          clearTimeout(loadingTimeout);
        };
      }, [location]);

return(
    <div className='uxui'>
    {isLoading? (
    <Loader/>)
    :
    (
        <>
        <NavExpertise/>
        <First
        principalImage={elipse}
        experienceTitle='UX/UI'
        experienceParagraph="Welcome to a journey through my UX/UI design portfolio, where digital experiences come to life. With a blend of creativity and user-centric approach, I've crafted interfaces that seamlessly marry aesthetics with functionality. From wireframes to prototypes, my designs breathe life into ideas, enhancing user engagement and satisfaction. Let's explore a collection that showcases my passion for creating intuitive, impactful, and visually appealing digital solutions."
        animationImage={elipse}
        animation='romboAnimation'
        />
    <div className='projects'>
            <ProjectRight
            number=''
             projectName='Boar'
             projectText="Creation of the complete image for a craft beer to launch in the market."
             buttonUrl="https://www.behance.net/gallery/144309983/Boar-Cerveza-Natural"
             projectImage={boarUx}
             />
     </div>
     <div className='projects'>
            <ProjectLeft
            numberLeft=''
             projectLeftName="Donapp"
             projectLeftText="Donapp is an application aimed at promoting blood donation and providing assistance to the community."
             buttonLeftUrl="https://www.behance.net/gallery/100876611/DonApp"
             projectLeftImage={donapp}
             />
     </div>
     <div className='projects'>
            <ProjectRight
            number=''
             projectName="e-Balance"
             projectText="Preventing food waste is a collective responsibility. "
             buttonUrl="https://www.behance.net/gallery/144409317/eBalance-App"
             projectImage={ebalance}
             />
     </div>
     <div className='projects'>
            <ProjectLeft
            numberLeft=''
             projectLeftName="Yendo"
             projectLeftText="An app that connects individuals with similar interests for shared activities. Designed for those seeking like-minded connections, making it easier to find others who share their passions"
             buttonLeftUrl="https://www.behance.net/gallery/144405243/Yendo-app"
             projectLeftImage={Yendo}
             />
     </div>
     <div className='projects'>
            <ProjectRight
            number=''
             projectName="The Sandbox Marketplace"
             projectText="Enhance the user experience and interface design specifically for the buying, selling, categorization and visualization of NFTs available for sale. "
             buttonUrl="https://www.behance.net/gallery/144409317/eBalance-App"
             projectImage={sandbox}
             />
     </div>
     
     <div className='cardsExperience'>
        <CardsContent 
        customClassName='cardSection'
        customCardClassName='experienceCards'
        customCardMobileImage='cardImageMobile'
        customCardMobileTitle='cardTitleMobile'
        customCardMobileP='cardTextMobile'/>
     </div>
     <div className='footerUx' id='footer'> 
        <Footer/>
     </div>
     </>
    )
    }
    
</div>
)
}
export default UXUI