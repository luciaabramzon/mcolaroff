import imageCase from '../images/caseStudy.svg'
import arrow1 from '../images/arrow1.svg'
import arrow2 from '../images/arrow2.svg'

import '../styles/caseStudy.css'

const CaseStudy=()=>{
    return(
        <div>
        <div className="item1">
            <div className="caseStudy">
                <p className='caseStudyP'>Case Study</p>
                <p className='caseStudySub'>Industry of the work</p>
                <p className='caseStudyTitle'>Brief overview of the job's focus </p>
                <p className='caseStudyInfo'>The role entails developing a product that offers solutions to [specific problems or needs]. The resulting product provides streamlined solutions, enriching user experiences and boosting overall efficiency.</p>
                <div className='arrows'>
                <img src={arrow1}/>
                <img src={arrow2}/>
                </div>
            </div>
            <div className="imagesStudy">
            <img src={imageCase}/>
            </div>
        </div>
        <div className="itemMobile">
            <div className="caseStudy">
                <p className='caseStudyP'>Case Study</p>
                <p className='caseStudySub'>Industry of the work</p>
            </div>
            <div className="imagesStudy">
            <img className='imgMobile' src={imageCase}/>
            </div>
            <div>
                <p className='caseStudyTitle'>Brief overview of the job's focus </p>
                <p className='caseStudyInfo'>The role entails developing a product that offers solutions to [specific problems or needs]. The resulting product provides streamlined solutions, enriching user experiences and boosting overall efficiency.</p>
                <div className='arrows'>
                <img src={arrow1}/>
                <img src={arrow2}/>
                </div>
            </div>
            
        </div>
        </div>
    )
}
export default CaseStudy;
