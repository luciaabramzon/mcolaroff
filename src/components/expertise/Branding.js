import '../../styles/uxui.css'
import NavExpertise from './NavExpertise'
import circle from '../../images/circle2Loader.svg'
import holistic from '../../images/holisticLogo.svg'
import mw from '../../images/LogoMW.svg'
import oa from '../../images/oalogo.svg'
import donate from '../../images/donateLogo.svg'
import periplo from '../../images/periploLogo.webp'
import mgr from '../../images/mgrLogo.svg'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader'
import CardsContent from '../cardsContent'
import First from './first'
import naturalBeats from '../../images/naturalBeats.webp'
import mgrBranding from '../../images/mgrBranding.webp'
import ProjectRight from './ProjectRight'
import ProjectLeft from './ProjectLeft'


const Branding=()=>{
    const [isLoading, setLoading] = useState(true);
    const location = useLocation();
    const logos=[
        {
            logo:holistic
        },
        {
            logo:mw
        },
        {
            logo:oa
        },
        {
            logo:donate
        },
        {
            logo:periplo
        },
        {
            logo: mgr
        }
    ]
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
        principalImage={circle}
        experienceTitle='Branding'
        experienceParagraph='Ihighly recommend Martin for any UX/UI design role, particularly in the web3 blockchain DeFi space. As a UX/UI Designer at The Sandbox Game, Martin demonstrated exceptional skill and creativity, a deep understanding of the blockchain industry and DeFi space, and a positive attitude and strong work ethic. Their designs were both functional and aesthetically pleasing, and they were always willing to collaborate and provide constructive feedback. Martin would make a significant impact on any design team they join'
        animationImage={circle}
        animation='polygonAnimation'
        buttonContactColor='buttonBranding'
        />
        <div className='logos'>
        <h1 className='tituloBranding'>Logofolio</h1>
        <div className='branding'>
            {
                logos.map((log)=>(
                    <div className='branding1'>
                        <img className='imagesBranding' src={log.logo}/>
                        </div>
                ))
            }
        </div>
        </div>
        <div className='projectsBranding'>
        <h1 className='tituloBranding'>Projects</h1>
        <ProjectRight
         number=''
         projectName="Natural Beats"
         projectText="Creation ofthe visual identity for an electronic music festival in a natural spot within the city."
         buttonUrl='https://www.behance.net/gallery/89686345/Natural-Beats'
         projectImage={naturalBeats}
         brandingClassRight='brandingClassRight'
         />
         <div className='brandingP'>
         <ProjectLeft
                numberLeft=''
                projectLeftName="MGR"
                projectLeftText='Re-Branding MGR SPORT, a local sports brand, to infuse it with heightened dynamism and a focus on movement.'
                buttonLeftUrl="https://www.behance.net/gallery/144326317/MGR-Sport"
                projectLeftImage={mgrBranding}
                brandingClassLeft='BrandingProjectLeft'
         />
        </div>
         </div>

        <div className='cardsExperience'>
        <CardsContent
        customClassName='cardSection'
        customCardClassName='experienceCards'
        customCardMobileImage='cardImageMobile'
        customCardMobileTitle='cardTitleMobile'
        customCardMobileP='cardTextMobile'
     />
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
export default Branding