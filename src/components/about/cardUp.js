import '../../styles/about.css'
const CardUp=({cardUyear,cardUtext,cardUimage})=>{
    return(
        <div className="cardUp">
            <div className="cardImage">
                <img className='imageCard imageCardUp' src={cardUimage}/>
            </div>
            <div className="cardText">
            <p>{cardUyear}</p>
            <p className='cardParagraph'>{cardUtext}</p>
            </div>
        </div>
    )
}
export default CardUp