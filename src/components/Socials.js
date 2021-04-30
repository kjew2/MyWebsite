import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
function Socials({linkedin, github}) {
    return (
        <div>
            <Link to={linkedin} target="_blank" rel="noopener noreferrer" >
                <AiFillLinkedin/>
            </Link>
            <Link to={github} target="_blank" rel="noopener noreferrer" >
                <AiFillGithub/>
            </Link>
        </div>
        
    )
}

export default Socials
