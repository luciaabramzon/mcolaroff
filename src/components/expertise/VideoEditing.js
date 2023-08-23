import '../../styles/uxui.css'
import '../../styles/animation.css'
import NavExpertise from './NavExpertise'
import triangle from '../../images/triangleLoader.svg'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader'



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
        <div className='firstUx'>
            <div className='textUx'>
                <div className='titleUx'>
                    <div className='imageEx'>
                    <img src={triangle} className='elipseUx'/>
                    </div>
                    <div className='titleEx'>
                    <h1>Video Editing</h1>
                    </div>
                </div>
                <div className='paragraphUx'>
                    <p>
                    In a world saturated with audiovisual content, I have learned to communicate through the language of visuals, effectively evoking emotions in the audience that views my creations. This ability to captivate, move, and even evoke feelings of fear by simply creating the right atmosphere has become a powerful skill in my repertoire.
                    </p>
                </div>
            </div>
            <div className='contactUx'>
                <div className='elipseUxUi'>
                <img src={triangle} className='triangleAnimation' />
                </div>
                <div className='buttonContactEx'>
                <a href='#footer'><button className='contactMeUx contactMeVE'>Contact Me</button></a>   
                </div>
               
            </div>
        </div>
        <div className='videos'>
        <iframe src="https://player.vimeo.com/video/713405474?h=fbe0a1ba95" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <iframe  src="https://www.youtube.com/embed/UFwaWTmvjsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe  src="https://www.youtube.com/embed/aZ---XY8ih8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe  src="https://www.youtube.com/embed/_UYM77clud4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         
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