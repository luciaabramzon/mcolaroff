import '../../styles/uxui.css'
import '../../styles/animation.css'
import NavExpertise from './NavExpertise'
import triangle from '../../images/triangleLoader.svg'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader'
import First from './first'
import CardsContent from '../cardsContent'



const VideoEditing=()=>{
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
        principalImage={triangle}
        experienceTitle='Video Editing'
        experienceParagraph='In a world saturated with audiovisual content, I have learned to communicate through the language of visuals, effectively evoking emotions in the audience that views my creations. This ability to captivate, move, and even evoke feelings of fear by simply creating the right atmosphere has become a powerful skill in my repertoire.'
        animationImage={triangle}
        animation='triangleAnimation'
        buttonContactColor='veButton'
        />

        <div className='videos'>
        <iframe src="https://player.vimeo.com/video/713405474?h=fbe0a1ba95" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <iframe  src="https://www.youtube.com/embed/UFwaWTmvjsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe  src="https://www.youtube.com/embed/aZ---XY8ih8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe  src="https://www.youtube.com/embed/_UYM77clud4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         
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
export default VideoEditing