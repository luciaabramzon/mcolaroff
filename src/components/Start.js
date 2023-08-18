import '../styles/inicio.css'
import logo from '../images/logo-2.svg'
import frame from '../images/Frame.svg'
import { Link } from 'react-router-dom'

const Start =()=>{
   
    return(
        <div className="start">
       <div className='nav'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <div className='buttons'>
                <div className='aboutMe'>
                  <Link to='/about'><a className='startButtons'>About me</a>  </Link>
                </div>
                <div className='contactMe'>
                <a href='#footer' className='startButtons'>Contact me</a>    
                </div>
            </div>
        </div>
        <div className='title'>
        <div className='name'>
            Martin Colaroff
        </div>
        <div className='about'>
         <p>   Multimedia designer 
            crafting innovative solutions
            through human-centric design</p>
        </div>
        <div>
        <a href='#footer'>  <button className='contactButton'> Contact me</button></a>
        </div>
        </div>
        <div className='figures'>
            <img className='frame' src={frame}/>
        </div>
       </div>

    )
}

export default Start