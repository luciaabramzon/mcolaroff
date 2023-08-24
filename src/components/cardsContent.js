import { Link } from "react-router-dom";
import card1 from '../images/elipse.svg'
import card2 from '../images/rectangle.svg'
import card3 from '../images/triangle.svg'
import card4 from '../images/elipse2.svg'
import card5 from '../images/polygon2.svg'
import card6 from '../images/polygon3.svg'

const CardsContent = ({customClassName,customCardClassName,customCardMobileImage,customCardMobileTitle,customCardMobileP}) => {

  const cards=[
    {   
        image:card1,
        title:'UX/UI DESIGN',
        content:"Journey through my UX/UI design portfolio, where digital experiences come to life",
        link:'/uxui',
        backgroundColor:'rgb(64 110 228)',
    },
    {
        image:card2,
        title:"PHOTOGRAPH",
        content:"Seeking a different perspective, I work with product photography both professionally and as a hobby",
        link:'/photograph',
        backgroundColor:'#9747ff'
    },
    {
        image:card3,
        title:"VIDEO EDITING",
        content:"Video editing aimed at evoking emotions within the pieces I create",
        link:'/video',
        backgroundColor:'#e37056',
    },
    {
        image:card4,
        title:"BRANDING",
        content:'Where each project is a unique story told through visuals',
        link:'/branding',
        backgroundColor:"#e3b440",
    },
    {
        image:card5,
        title:"VJING",
        content:"Afficionate about real-time visuals, exploring my creativity.",
        link:"/vjing",
        backgroundColor:'#93bc97'
    },
    {
        image:card6,
        title:"COLLAGE",
        content:"Embarking on a journey through another galaxy in search of a surreal voyage.",
        link:'/collage',
        backgroundColor:'#17aaa9'
    }
]
const handleHover = (event, color) => {
    event.target.style.backgroundColor = color;
  };

  const handleHoverExit = (event) => {
    event.target.style.backgroundColor = '#1B1B1B'; 
  };
    return (
      <div className={customClassName}>
        {cards.map((card) => (
          <Link to={card.link} hash='top' key={card.title}>
            <div
              className={`cards ${customCardClassName} `}
              style={{'--card-hover-background-color': card.backgroundColor}}
              onMouseEnter={(e) => handleHover(e, card.backgroundColor)}
              onMouseLeave={(e) => handleHoverExit(e)}
            >
              <img className={`icon ${customCardMobileImage}` }src={card.image} />
              <p className={`cardTitle ${customCardMobileTitle}`}>{card.title}</p>
              <p className={`cardInfo ${customCardMobileP}`}>{card.content}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  
  export default CardsContent;