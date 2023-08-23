import '../styles/expertise.css'
import '../styles/animation.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import CardsContent from './cardsContent'


const Expertise=()=>{
    return(
        <div className='expertise'>
            <div className='experience'>
                <div className='me'>
                    <p className='me1'>What I do</p>
                    <p className='me2'>Some of my expertise</p>
                </div>
                <CardsContent
                customClassName='cardsContent'/>
            </div>
        </div>
    )
}
export default Expertise


