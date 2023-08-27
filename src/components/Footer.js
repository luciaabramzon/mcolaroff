import '../styles/footer.css'
import forms from '../images/Frame.svg'
import { Icon } from 'semantic-ui-react'

const Footer=({id})=>{
    const phone='+59898250291'
    return(
        <div className="footer" id={id} >
            <div className='footerText'>
            <div className='contact'>
                <div className='contactTitle'>
                    Contact
                </div>
                <div className='contactText'>
                Let's dive into this 
                adventure together!
                </div>
            </div>
            <div className='socialMedia'>
            <a className='footerIcons' href='https://www.linkedin.com/in/martin-colaroff-89a01954/'>
            <Icon name='linkedin square'/>
            </a>
            <a className='footerIcons' href='https://www.behance.net/garage25'>
            <Icon name='behance square'/>
            </a>
            <a className='footerIcons' href='https://www.instagram.com/martin.colaroff/'>
            <Icon name='instagram'/>
            </a>
            <a className='footerIcons' href='https://www.youtube.com/channel/UCfkeJkSeYTe9BPzLsMzxrbg'>
            <Icon name='youtube'/>
            </a>
            <a className='footerIcons' href={`https://wa.me/${phone}`} target='_blank' rel='noopener noreferrer'>
            <Icon name='whatsapp'/>
            </a>
            </div>
            </div>
            <div className='footerForms'>
                <img src={forms}/>
            </div>
        </div>
    )
}

export default Footer