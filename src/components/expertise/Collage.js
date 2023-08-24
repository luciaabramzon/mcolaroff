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
import First from './first'
import CardsContent from '../cardsContent'



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
            <First
        principalImage={rombo}
        experienceTitle='Collage'
        experienceParagraph='To unlock my creativity, I strive to craft parallel universes through surreal compositions. I seek to uncover unsettling yet captivating elements within these artworks, allowing my imagination to soar to realms untouched by the constraints of everyday life'
        animationImage={rombo}
        animation='animationImage'
        buttonContactColor='collageButton'
        />
        
        <div className='collage'>
            <div className='collage1'>
                <img className='imageRight' src={c1}/>
                <img className='imageLeft' src={c2}/>
            </div>
            <div className='collage1'>
                <img className='imageRight' src={c3}/>
                <img className='imageLeft' src={c4}/>
            </div>
            <div className='collage1'>
                <img className='imageRight' src={c5}/>
                <img className='imageLeft' src={c6}/>
            </div>
            <div className='collage1'>
                <img className='imageRight' src={c7}/>
                <img className='imageLeft' src={c8}/>
            </div>
            <div className='collage1'>
                <img className='imageRight' src={c9}/>
                <img  className='imageLeft' src={c10}/>
            </div>
            <div className='collage1'>
                <img className='imageRight' src={c11}/>
                <img className='imageLeft' src={c12}/>
            </div>
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
export default Collage