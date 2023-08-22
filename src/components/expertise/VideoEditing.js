import '../../styles/uxui.css'
import '../../styles/animation.css'
import NavExpertise from './NavExpertise'
import triangle from '../../images/triangleLoader.svg'
import ProjectRight from './ProjectRight'
import projectR from '../../images/projectR.svg'
import ProjectLeft from './ProjectLeft'
import projectL from '../../images/projectL.svg'
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
                    Ihighly recommend Martin for any UX/UI design role, particularly in the web3 blockchain DeFi space. As a UX/UI Designer at The Sandbox Game, Martin demonstrated exceptional skill and creativity, a deep understanding of the blockchain industry and DeFi space, and a positive attitude and strong work ethic. Their designs were both functional and aesthetically pleasing, and they were always willing to collaborate and provide constructive feedback. Martin would make a significant impact on any design team they join
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UFwaWTmvjsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aZ---XY8ih8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_UYM77clud4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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