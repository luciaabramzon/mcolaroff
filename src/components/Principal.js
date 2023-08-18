import CaseStudy from "./CaseStudy"
import Expertise from "./Expertise"
import Footer from "./Footer"
import Recomendations from "./Recomendations"
import Start from "./Start"

const Principal=()=>{
    return(
        <>      
        <Start/>
        <Expertise/>
        <CaseStudy/>
        <Recomendations/>
        <Footer id='footer'/>
        </>
    )
}
export default Principal