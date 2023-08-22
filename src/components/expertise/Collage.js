import '../../styles/uxui.css'
import NavExpertise from './NavExpertise'
import rombo from '../../images/romboLoader.svg'
import c1 from '../../images/collage1.svg'
import c2 from '../../images/collage2.svg'
import c3 from '../../images/collage3.svg'
import c4 from '../../images/collage4.webp'
import c5 from '../../images/collage5.svg'
import c6 from '../../images/collage6.webp'
import c7 from '../../images/collage7.webp'
import c8 from '../../images/collage8.svg'
import c9 from '../../images/collage9.webp'
import c10 from '../../images/collage10.webp'
import c11 from '../../images/collage11.webp'
import c12 from '../../images/collage12.webp'
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
                    <div className='imageEx'>
                    <img src={rombo} className='elipseUx'/>
                    </div>
                    <div className='titleEx'>
                    <h1>Collage</h1>
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
                <img src={rombo} className='animationImage' />
                </div>
                <div className='buttonContactEx'>
                <a href='#footer'><button className='contactMeUx contactMeC'>Contact Me</button></a>   
                </div>
               
            </div>
        </div>
        <div className='branding'>
            <div className='branding1'>
                <img className='imageRight' src={c1}/>
                <img className='imageLeft' src={c2}/>
            </div>
            <div className='branding1'>
                <img className='imageRight' src={c3}/>
                <img className='imageLeft' src={c4}/>
            </div>
            <div className='branding1'>
                <img className='imageRight' src={c5}/>
                <img className='imageLeft' src={c6}/>
            </div>
            <div className='branding1'>
                <img className='imageRight' src={c7}/>
                <img className='imageLeft' src={c8}/>
            </div>
            <div className='branding1'>
                <img className='imageRight' src={c9}/>
                <img  className='imageLeft' src={c10}/>
            </div>
            <div className='branding1'>
                <img className='imageRight' src={c11}/>
                <img className='imageLeft' src={c12}/>
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
export default Collage