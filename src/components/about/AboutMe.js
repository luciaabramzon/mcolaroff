import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from '../Loader'
import '../../styles/about.css'
import NavExpertise from "../expertise/NavExpertise";
import Cards from "./cards";
import Passions from "./passions";
import Footer from '../Footer'


const AboutMe=()=>{
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
                <Footer/>
            </div>
            </>
        )
}
</div>
)
}

export default AboutMe