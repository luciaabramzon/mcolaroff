import '../../styles/uxui.css'
import NavExpertise from './NavExpertise'
import circle from '../../images/circle2Loader.svg'
import holistic from '../../images/holisticLogo.svg'
import mw from '../../images/LogoMW.svg'
import oa from '../../images/oalogo.svg'
import donate from '../../images/donateLogo.svg'
import periplo from '../../images/periploLogo.svg'
import mgr from '../../images/mgrLogo.svg'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader'



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
            <div className='firstUx'>
            <div className='textUx'>
                <div className='titleUx'>
                    <div className='imageEx'>
                    <img src={circle} className='elipseUx'/>
                    </div>
                    <div className='titleEx'>
                    <h1>Branding</h1>
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
                <img src={circle} className='polygonAnimation' />
                </div>
                <div className='buttonContactEx'>
                <a href='#footer'><button className='contactMeUx contactMeBrand'>Contact Me</button></a>   
                </div>
               
            </div>
        </div>
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