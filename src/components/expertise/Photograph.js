import '../../styles/uxui.css'
import '../../styles/animation.css'
import NavExpertise from './NavExpertise'
import cuadrado from '../../images/cuadradoLoader.svg'
import p1 from '../../images/p1.webp'
import p2 from '../../images/p2.webp'
import p3 from '../../images/p3.webp'
import p4 from '../../images/p4.webp'
import p5 from '../../images/p5.webp'
import p6 from '../../images/p6.webp'
import p7 from '../../images/p7.webp'
import p8 from '../../images/p8.webp'
import p9 from '../../images/p9.webp'
import p10 from '../../images/p10.webp'
import p11 from '../../images/p11.webp'
import p12 from '../../images/p12.webp'
import p13 from '../../images/p13.webp'
import p14 from '../../images/p14.webp'
import p15 from '../../images/p15.webp'
import p16 from '../../images/p16.webp'
import p17 from '../../images/p17.webp'
import p18 from '../../images/p18.webp'
import p19 from '../../images/p19.webp'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader'



const Photograph=()=>{
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
                    <img src={cuadrado} className='elipseUx'/>
                    </div>
                    <div className='titleEx'>
                    <h1>Photograph</h1>
                    </div>
                </div>
                <div className='paragraphUx'>
                    <p>
                    It began as a hobby that later became an integral part of my work. The art of composing a photograph, seeking the perfect moment, and capturing the essence of a moment has made photography an essential part of my life
                    </p>
                </div>
            </div>
            <div className='contactUx'>
                <div className='elipseUxUi'>
                <img src={cuadrado}  className='cuadradoAnimation'/>
                </div>
                <div className='buttonContactEx'>
                <a href='#footer'><button className='contactMeUx contactMePh' >Contact Me</button></a>   
                </div>
               
            </div>
        </div>
        <div className='passionPhotos photoContainer'>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p1}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p2}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p3}/>
                    </div>
                </div>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p4}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p5}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p6}/>
                    </div>
                </div>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img  className='passionsImg' src={p7}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p8}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p9}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p10}/>
                    </div>
                </div>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p11}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p12}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg'  src={p13}/>
                    </div>
                </div>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p14}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p15}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p16}/>
                    </div>
                </div>
                <div className='passionsLast'>
                <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p17}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p18}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p19}/>
                    </div>
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
export default Photograph