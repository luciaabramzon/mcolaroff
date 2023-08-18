import '../../styles/uxui.css'
import NavExpertise from './NavExpertise'
import elipse from '../../images/elipseColor.svg'
import ProjectRight from './ProjectRight'
import projectR from '../../images/projectR.svg'
import ProjectLeft from './ProjectLeft'
import projectL from '../../images/projectL.svg'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader'



const Collage=()=>{
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
                    <img src={elipse} className='elipseUx'/>
                    <h1>Collage</h1>
                </div>
                <div className='paragraphUx'>
                    <p>
                    Ihighly recommend Martin for any UX/UI design role, particularly in the web3 blockchain DeFi space. As a UX/UI Designer at The Sandbox Game, Martin demonstrated exceptional skill and creativity, a deep understanding of the blockchain industry and DeFi space, and a positive attitude and strong work ethic. Their designs were both functional and aesthetically pleasing, and they were always willing to collaborate and provide constructive feedback. Martin would make a significant impact on any design team they join
                    </p>
                </div>
            </div>
            <div className='contactUx'>
                <div className='elipseUxUi'>
                <img src={elipse} />
                </div>
                <a href='#footer'><button className='contactMeUx'>Contact Me</button></a>   
            </div>
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
         <div className='projects'>
                <ProjectLeft
                numberLeft='02'
                 projectLeftName="Name of the proyect"
                 projectLeftText="Breif information about the proyect which problems  I solve as a designer."
                 buttonLeftUrl="/project-1"
                 projectLeftImage={projectL}
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
         <div className='footerUx' id='footer'> 
            <Footer/>
         </div>
         </>
        )
        }
        
    </div>
)
}
export default Collage