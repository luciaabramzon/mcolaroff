import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutMe from "./components/about/AboutMe"
import Branding from "./components/expertise/Branding"
import Collage from "./components/expertise/Collage"
import Photograph from "./components/expertise/Photograph"
import UXUI from "./components/expertise/UXUI"
import VideoEditing from "./components/expertise/VideoEditing"
import Vjing from "./components/expertise/Vjing"
import Principal from "./components/Principal"

const Router=()=>{
    return(
        <BrowserRouter>
   
        <Routes>
            <Route exact path='/' element={<Principal/>}/>
            <Route exact path='/uxui' element={<UXUI/>}/>
            <Route exact path='/photograph' element={<Photograph/>}/>
            <Route exact path='/video' element={<VideoEditing/>}/>
            <Route exact path='/branding' element={<Branding/>}/>
            <Route exact path='/vjing' element={<Vjing/>}/>
            <Route exact path='/collage' element={<Collage/>}/>
            <Route exact path='/about' element={<AboutMe/>}/>
        </Routes>
        </BrowserRouter>

    )
}
export default Router