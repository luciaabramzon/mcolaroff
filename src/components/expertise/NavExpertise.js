import '../../styles/navExpertise.css'
import logo from '../../images/logoNegro.svg'
import { Link } from 'react-router-dom'
const NavExpertise=()=>{
    return(
        <div className="navExpertise">
            <div className='nav'>
            <div className='logo'>
                <Link to='/'><img src={logo}/></Link>
            </div>
            <div className='buttonsE'>
                <div className='aboutMe'>
                 <Link to='/about'><a className='startButtonsE'>About me</a> </Link>  
                </div>
                <div className='contactMe'>
                <a href='#footer' className='startButtonsE'>Contact me</a>    
                </div>
            </div>
        </div>
        </div>
    )
}
export default NavExpertise