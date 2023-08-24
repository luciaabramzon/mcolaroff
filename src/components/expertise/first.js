import '../../styles/uxui.css'
import '../../styles/animation.css'


const First =({principalImage,experienceTitle,experienceParagraph,animationImage,animation,buttonContactColor})=>{
    return(
<div className='firstUx'>
        <div className='textUx'>
            <div className='titleUx'>
                <div className='imageEx'>
                <img src={principalImage} className='elipseUx'/>
                </div>
                <div className='titleEx'>
                <h1>{experienceTitle}</h1>
                </div>
            </div>
            <div className='paragraphUx'>
                <p>
                {experienceParagraph}
                </p>
            </div>
        </div>
        <div className='contactUx'>
            <div className='elipseUxUi'>
            <img src={animationImage} className={animation} />
            </div>
            <div className='buttonContactEx' >
            <a href='#footer'><button className={`contactMeUx ${buttonContactColor}`} >Contact Me</button></a>   
            </div>
           
        </div>
    </div>
    )
}
export default First