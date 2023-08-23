import '../../styles/uxui.css'
import '../../styles/animation.css'
import NavExpertise from './NavExpertise'
import elipse from '../../images/circleLoader.svg'
import ProjectRight from './ProjectRight'
import projectR from '../../images/projectR.svg'
import ProjectLeft from './ProjectLeft'
import projectL from '../../images/projectL.svg'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader'
import boarUx from '../../images/boarux.svg'
import donapp from '../../images/uxui.webp'
import Expertise from '../Expertise'
import CardsContent from '../cardsContent'


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
    <div className='firstUx'>
        <div className='textUx'>
            <div className='titleUx'>
                <div className='imageEx'>
                <img src={elipse} className='elipseUx'/>
                </div>
                <div className='titleEx'>
                <h1>UX/UI</h1>
                </div>
            </div>
            <div className='paragraphUx'>
                <p>
                Ihighly recommend Martin for any UX/UI design role, particularly in the web3 blockchain DeFi space. As a UX/UI Designer at The Sandbox Game, Martin demonstrated exceptional skill and creativity, a deep understanding of the blockchain industry and DeFi space, and a positive attitude and strong work ethic. Their designs were both functional and aesthetically pleasing, and they were always willing to collaborate and provide constructive feedback. Martin would make a significant impact on any design team they join
                </p>
            </div>
        </div>
        <div className='contactUx'>
            <div className='elipseUxUi'>
            <img src={elipse} className='romboAnimation' />
            </div>
            <div className='buttonContactEx'>
            <a href='#footer'><button className='contactMeUx'>Contact Me</button></a>   
            </div>
           
        </div>
    </div>
    <div className='projects'>
            <ProjectRight
            number='01'
             projectName='Boar'
             projectText="Creation of the complete image for a craft beer to launch in the market."
             buttonUrl="https://www.behance.net/gallery/144309983/Boar-Cerveza-Natural"
             projectImage={boarUx}
             />
     </div>
     <div className='projects'>
            <ProjectLeft
            numberLeft='02'
             projectLeftName="Donapp"
             projectLeftText="Donapp is an application aimed at promoting blood donation and providing assistance to the community."
             buttonLeftUrl="https://www.behance.net/gallery/100876611/DonApp"
             projectLeftImage={donapp}
             />
     </div>
     <div className='projects'>
            <ProjectRight
            number='01'
             projectName="Name of the proyect"
             projectText="Breif information about the proyect which problems  I solve as a designer."
             buttonUrl="/project-1"
             projectImage={projectR}
             />
     </div>
     <div className='cardsExperience'>
        <CardsContent 
        customClassName='cardSection'
        customCardClassName='experienceCards'/>
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