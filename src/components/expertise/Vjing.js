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
        experienceParagraph="Dive into my world of real-time visuals, where art and technology dance harmoniously. With a passion for creating captivating visual experiences on the fly, I've harnessed the power of real-time graphics to immerse audiences in dynamic and interactive environments. From live events to interactive installations, my journey explores the synergy between creativity and innovation. Join me in discovering a collection that celebrates the magic of visuals that come to life in the present moment"
        animation='circleAnimation'
        buttonContactColor='vjButton'
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