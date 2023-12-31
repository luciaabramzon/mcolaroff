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
import CardsContent from '../cardsContent'
import First from './first'




const Photograph=()=>{
    const [isLoading, setLoading] = useState(true);
    const location = useLocation();
    const [modalImage, setModalImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    
    const imagesData = [
        p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19
      ];
    
      const openModal = (imageUrl) => {
        const index = imagesData.findIndex((data) => data === imageUrl);
        setCurrentIndex(index);
        setModalImage(imageUrl);
      };
      
      const closeModal = () => {
        setModalImage(null);
      };

      const goToPrevImage = (e) => {
        e.stopPropagation();
        if (currentIndex !== null && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          setModalImage(imagesData[currentIndex - 1]);
        }
      };
      
      const goToNextImage = (e) => {
        e.stopPropagation();
        if (currentIndex !== null && currentIndex < imagesData.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setModalImage(imagesData[currentIndex + 1]);
        }
      };
    
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
        principalImage={cuadrado}
        experienceTitle='Photograph'
        experienceParagraph='It began as a hobby that later became an integral part of my work. The art of composing a photograph, seeking the perfect moment, and capturing the essence of a moment has made photography an essential part of my life'
        animationImage={cuadrado}
        animation='cuadradoAnimation'
        buttonContactColor='photographColor'
        />
        <div className='passionPhotos photoContainer'>
        {modalImage && (
              <div className='image-modal-overlay' onClick={closeModal}>
                <div className='image-modal'>
                  <span className='modal-arrow prev' onClick={goToPrevImage}>&#8249;</span>
                  <img src={modalImage} alt='Large' />
                  <span className='modal-arrow next' onClick={goToNextImage}>&#8250;</span>
                  <div className='close-modal' onClick={closeModal}>
                    <span>&times;</span>
                  </div>
                </div>
              </div>
            )}

                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg' 
                    src={p1}
                    onClick={() => openModal(p1)}  />
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg'
                     src={p2}
                     onClick={() => openModal(p2)} />
                    </div>
                    <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg'
                     src={p3}
                     onClick={() => openModal(p3)} />
                    </div>
                </div>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg' 
                    src={p4}
                    onClick={() => openModal(p4)} />
                    </div>
                    <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg' 
                    src={p5}
                    onClick={() => openModal(p5)} />
                    </div>
                    <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg' 
                    src={p6}
                    onClick={() => openModal(p6)} />
                    </div>
                </div>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img  
                    className='passionsImg' 
                    src={p7}
                    onClick={() => openModal(p7)} />
                    </div>
                    <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg' 
                    src={p8}
                    onClick={() => openModal(p8)} />
                    </div>
                    <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg' 
                    src={p9}
                    onClick={() => openModal(p9)} />
                    </div>
                    <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg' 
                    src={p10}
                    onClick={() => openModal(p10)} />
                    </div>
                </div>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg' 
                    src={p11}
                    onClick={() => openModal(p11)} />
                    </div>
                    <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg' 
                    src={p12}
                    onClick={() => openModal(p12)} />
                    </div>
                    <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg'  
                    src={p13}
                    onClick={() => openModal(p13)} />
                    </div>
                </div>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg' 
                    src={p14}
                    onClick={() => openModal(p14)}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg'
                     src={p15}
                     onClick={() => openModal(p15)}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg'
                     src={p16}
                     onClick={() => openModal(p16)}/>
                    </div>
                </div>
                <div className='passionsLast'>
                <div className='passionsImgContainer'>
                    <img 
                    className='passionsImg'
                     src={p17}
                     onClick={() => openModal(p17)}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p18}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={p19}/>
                    </div>
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
export default Photograph