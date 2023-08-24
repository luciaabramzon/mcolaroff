import '../../styles/uxui.css'
import NavExpertise from './NavExpertise'
import polygon from '../../images/polygonLoader.svg'
import ProjectRight from './ProjectRight'
import projectR from '../../images/projectR.svg'
import ProjectLeft from './ProjectLeft'
import projectL from '../../images/projectL.svg'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader'
import CardsContent from '../cardsContent'
import First from './first'



const Vjing=()=>{
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
        principalImage={polygon}
        experienceTitle='Vjing'
        experienceParagraph='Ihighly recommend Martin for any UX/UI design role, particularly in the web3 blockchain DeFi space. As a UX/UI Designer at The Sandbox Game, Martin demonstrated exceptional skill and creativity, a deep understanding of the blockchain industry and DeFi space, and a positive attitude and strong work ethic. Their designs were both functional and aesthetically pleasing, and they were always willing to collaborate and provide constructive feedback. Martin would make a significant impact on any design team they join'
        animationImage={polygon}
        animation='circleAnimation'
        />
    
         <div className='videos'>
         <iframe  src="https://www.youtube.com/embed/OWnJl795VnM?si=CIYW4q1Kd0jrseu5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
export default Vjing