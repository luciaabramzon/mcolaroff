
import '../styles/caseStudy.css'

const Cases=({caseStudyP,caseStudySub,caseStudyT,caseStudyI,img1,img2,gif})=>{
    return(
        <div className="item1">
        <div className="caseStudy">
            <p className='caseStudyP'>{caseStudyP}</p>
            <p className='caseStudySub'>{caseStudySub}</p>
            <p className='caseStudyTitle'>{caseStudyT}</p>
            <p className='caseStudyInfo'>{caseStudyI}</p>
        </div>
        <div className="imagesStudy">
        <div className='image1'>
            <img className='imageStudy1' src={img1}/>
        </div>
        <div className='imagesGif'>
            <div className='image2'>
            <img className='' src={img2}/>
            </div>
           <div className='mgrGif'>
           <img className='gif' src={gif}/>
           </div>

        </div>
        </div>
    </div>
    )
}

export default Cases