import '../../styles/about.css'
import CardDown from './cardDown'
import CardUp from './cardUp'
import cardD1 from '../../images/card1.webp'
import cardU2 from '../../images/ivy.jpg'
import card3 from '../../images/card3.svg'
import card4 from '../../images/card4.svg'
import card5 from '../../images/card5.svg'
import card7 from '../../images/compupel.jpg'
import card6 from '../../images/card6.svg'
import card8 from '../../images/card8.jpg'
const Cards=()=>{
return(
    <div className="aboutMeCards">
    <div className="cardContainer">
    <CardDown
    cardDyear='1991'
    cardDtext='Born in Montevideo, Uruguay, ready to embark on this journey called life.'
    cardDimage={cardD1}/>
    </div>
    <div className="cardContainer">
    <CardUp
    cardUyear='1996'
    cardUtext='Started studing english at Ivy Thomas Memorial School'
    cardUimage={cardU2}/>
    </div>
    <div className="cardContainer">
    <CardDown
    cardDyear='2009'
    cardDtext='Finish  high school at Instituto XXIII on Montevideo'
    cardDimage={card3}
    />
    </div>
    <div className="cardContainer">
    <CardUp
    cardUyear='2010'
    cardUtext='I started to study the career of public accountant at UdelaR'
    cardUimage={card4}
    />
    </div>
    <div className="cardContainer">
    <CardDown
    cardDyear='2014'
    cardDtext="Managing Partner of Audistock, a company specialized in conducting audits. Overseeing teams of up to 50 people."
    cardDimage={card5}
    />
    </div>
    <div className="cardContainer">
    <CardUp
    cardUyear='2017'
    cardUtext="After rethinking my future, I decided to start studying something I'm passionate about. I enrolled in the Bachelor's program in Multimedia Design at ORT University."
    cardUimage={card6}
    />
    </div>
    <div className="cardContainer">
    <CardDown
    cardDyear='2019'
    cardDtext="I worked at Compupel as a multimedia designer, creating social media campaigns and developing the company's e-commerce website. My main focus was on information architecture."
    cardDimage={card7}
    />
    </div>
    <div className="cardContainer">
    <CardUp
    cardUyear='2021'
    cardUtext="Lead UX/UI Designer for The Sandbox's marketplace.
    I lead human-centered design processes, considering operational teams and business needs."
    cardUimage={card8}
    />
    </div>
    </div>
)
}
export default Cards