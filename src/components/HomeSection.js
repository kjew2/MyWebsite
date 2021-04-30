import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import Socials from './Socials'
import './HomeSection.css'

function HomeSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, 
    buttonLabel, src, alt, imgStart, linkedin, github
}) {
    console.log("hi")
    console.log(topLine)
    return (
        <div>
            <div className={lightBg ? 'home' : 'home darkBg'}>
                <div className="Containter">
                    <div className="row home-row" style={{display: 'flex', flexDirection: imgStart == 'start' ? 'row-reverse' : 'row'}}>

                        <div className="col">
                            <div className="home-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home-subtitle' : 'home-subtitle dark'}>{description}</p>
                                <form method="post" action="mailto:kylejew3@gmail.com">
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </form>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home-img-wrapper">
                                <img src={src} alt={alt} className="home-img"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="socials">
                <Socials linkedin={linkedin} github={github}/>
            </div>
        </div>
    )
}

export default HomeSection
