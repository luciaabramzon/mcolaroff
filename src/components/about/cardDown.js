import '../../styles/about.css'
const CardDown=({cardDyear,cardDtext,cardDimage})=>{
    return(
        <div className="cardDown">
            <div className="cardText">
            <p>{cardDyear}</p>
            <p className='cardParagraph'>{cardDtext}</p>
            </div>
            <div className="cardImage">
                <img className='imageCard' src={cardDimage}/>
            </div>
        </div>
    )
}

export default CardDown