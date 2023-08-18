import '../../styles/passions.css'
import P11 from '../../images/P1-1.webp'
import P12 from '../../images/P1-2.webp'
import P13 from '../../images/P.1-3.svg'
import P21 from '../../images/P2-1.webp'
import P22 from '../../images/p2-2.svg'
import P23 from '../../images/P2-3.webp'
import P31 from '../../images/P3-1.webp'
import P32 from '../../images/P3-2.svg'
import P33 from '../../images/P3-3.svg'
import P34 from '../../images/P3-4.svg'
import P41 from '../../images/P4-1.svg'
import P42 from '../../images/P4-2.webp'
import P43 from '../../images/P4-3.webp'
const Passions=()=>{
    return(
        <div className="myPassions">
            <p className='passionsTitle'>
                My passions
            </p>
            <div className='passionPhotos'>
                <div className='passion'>
                    <img src={P11}/>
                    <img src={P12}/>
                    <img src={P13}/>
                </div>
                <div className='passions'>
                    <img src={P21}/>
                    <img src={P22}/>
                    <img src={P23}/>
                </div>
                <div className='passions'>
                    <img src={P31}/>
                    <img src={P32}/>
                    <img src={P33}/>
                    <img src={P34}/>
                </div>
                <div className='passions'>
                    <img src={P41}/>
                    <img src={P42}/>
                    <img src={P43}/>
                </div>
            </div>
        </div>
    )
}
export default Passions