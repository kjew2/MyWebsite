import React from 'react'
import HomeSection from '../../HomeSection'
import {homeObjOne} from './Data.js'
function Home() {
    return (
        <div>
            <HomeSection {...homeObjOne}/>
        </div>
    )
}

export default Home
