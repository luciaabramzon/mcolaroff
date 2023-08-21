import '../styles/expertise.css'
import '../styles/animation.css'
import card1 from '../images/elipse.svg'
import card2 from '../images/rectangle.svg'
import card3 from '../images/triangle.svg'
import card4 from '../images/elipse2.svg'
import card5 from '../images/polygon2.svg'
import card6 from '../images/polygon3.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Expertise=()=>{


    const cards=[
        {   
            image:card1,
            title:'UX/UI DESIGN',
            content:"Try here an informative text of what a UX/UI designer does.",
            link:'/uxui',
            color:'rgb(64 110 228)'
        },
        {
            image:card2,
            title:"PHOTOGRAPH",
            content:"Seeking a different perspective, I work with product photography both professionally and as a hobby",
            link:'/photograph',
            color:'#9747ff'
        },
        {
            image:card3,
            title:"VIDEO EDITING",
            content:"Video editing aimed at evoking emotions within the pieces I create",
            link:'/video',
            color:'#e37056',
        },
        {
            image:card4,
            title:"BRANDING",
            content:"Video editing aimed at evoking emotions within the pieces I create",
            link:'/branding',
            color:"#e3b440",
        },
        {
            image:card5,
            title:"VJING",
            content:"Afficionate about real-time visuals, exploring my creativity.",
            link:"/vjing",
            color:'#93bc97'
        },
        {
            image:card6,
            title:"COLLAGE",
            content:"Embarking on a journey through another galaxy in search of a surreal voyage.",
            link:'/collage',
            color:'#17aaa9'
        }
    ]
    const handleHover = (event, color) => {
        event.target.style.backgroundColor = color;
      };
    
      const handleHoverExit = (event) => {
        event.target.style.backgroundColor = '#1B1B1B'; 
      };
    return(
        <div className='expertise'>
            <div className='experience'>
                <div className='me'>
                    <p className='me1'>What I do</p>
                    <p className='me2'>Some of my expertise</p>
                </div>
                <div className='cardsContent'>
                    {cards.map((card)=>( 
                        <Link to={card.link} hash='top'>
                        <div className='cards'
                         key={card.title}
                         onMouseEnter={(e) => handleHover(e, card.color)}
                        onMouseLeave={(e) => handleHoverExit(e)}
                            >
                        <img className='icon' src={card.image}/>
                        <p className='cardTitle'>{card.title}</p>
                        <p className='cardInfo'>{card.content}</p>
                        </div>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    )
}
export default Expertise


