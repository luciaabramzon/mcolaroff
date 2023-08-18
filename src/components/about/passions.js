import '../../styles/passions.css'
import P11 from '../../images/P1-1.webp'
import P12 from '../../images/P1-2.webp'
import P13 from '../../images/P1-3.webp'
import P21 from '../../images/P2-1.webp'
import P22 from '../../images/P2-2.webp'
import P23 from '../../images/P2-3.webp'
import P31 from '../../images/P3-1.webp'
import P32 from '../../images/P3-2.webp'
import P33 from '../../images/P3-3.webp'
import P34 from '../../images/P3-4.webp'
import P41 from '../../images/P4-1.webp'
import P42 from '../../images/P4-2.webp'
import P43 from '../../images/P4-3.webp'
const Passions=()=>{
    return(
        <div className="myPassions">
            <div className='passionTitleDiv'>
            <p className='passionsTitle'>
                My passions
            </p>
            </div>
            <div className='passionPhotos'>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img className='passionsImg' src={P11}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={P12}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={P13}/>
                    </div>
                </div>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img className='passionsImg' src={P21}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={P22}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={P23}/>
                    </div>
                </div>
                <div className='passions'>
                <div className='passionsImgContainer'>
                    <img  className='passionsImg' src={P31}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={P32}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={P33}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={P34}/>
                    </div>
                </div>
                <div className='passionsLast'>
                <div className='passionsImgContainer'>
                    <img className='passionsImg' src={P41}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg' src={P42}/>
                    </div>
                    <div className='passionsImgContainer'>
                    <img className='passionsImg'  src={P43}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Passions