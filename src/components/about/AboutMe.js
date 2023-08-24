import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from '../Loader'
import '../../styles/about.css'
import NavExpertise from "../expertise/NavExpertise";
import Cards from "./cards";
import Passions from "./passions";
import Footer from '../Footer'
import CardsContent from "../cardsContent";


const AboutMe=()=>{
    const [isLoading, setLoading] = useState(true);
    const location = useLocation();

    const hash=[{text:'Design'},{text:'Music'},{text:'Family'},{text:'Sports'},{text:'Car racing'},{text:'Art'},{text:'Movies'} ,{text:'Travelling'},{text:'Carnaval'},{text:'Friends'},
    {text:'Montevideo'},{text:'Jordi'},{text:'Vjing'},{text:'Animals'},{text:'Knowing people'},{text:'Punta del Este'},{text:'Tennis'},{text:'Series'} ,{text:'History'} ,{text:'Football'},{text:'Llamadas'} 
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
            <div className="aboutMeComponent">
                <div className="textAbout">
                <p className="aboutTitle">About me</p>
                <p className="aboutText">Here you can see a brief journey through my life, sharing who I am, what I've accomplished, and where I'm headed</p>
                </div>
                <div className="myStory">
            <div className="aboutmeCardsContainer"  >
              <Cards/>
                </div>
                </div>
                <Passions/>
                <div className="hashtags">
                  {
                    hash.map((h)=>(
                      <div>
                        <li>{h.text}</li>
                        </div>
                    ))
                  }
                </div>
                <div className='cardsExperience'>
        <CardsContent
        customClassName='cardSection'
        customCardClassName='experienceCards'
        customCardMobileImage='cardImageMobile'
        customCardMobileTitle='cardTitleMobile'
        customCardMobileP='cardTextMobile'/>
     </div>
                <Footer/>
            </div>
            </>
        )
}
</div>
)
}

export default AboutMe