
import '../styles/caseStudy.css'

const CasesMobile=({caseStudyP,caseStudySub,caseStudyT,caseStudyI,img1,img2,gif})=>{
    return(
        <div className="item1">
        <div className="caseStudy">
            <p className='caseStudyP'>{caseStudyP}</p>
            <p className='caseStudySub'>{caseStudySub}</p>
            <div className="imagesStudy">
        <div className='image1'>
            <img className='imageStudy1' src={img1}/>
        </div>
        <div className='imagesGif'>
            <img className='image2' src={img2}/>
            <img className='mgrGif' src={gif}/>
        </div>
        </div>
            <p className='caseStudyTitle'>{caseStudyT}</p>
            <p className='caseStudyInfo'>{caseStudyI}</p>
        </div>
        
    </div>
    )
}

export default CasesMobile