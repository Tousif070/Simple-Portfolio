import React from "react"

import displayPicture from "../Images/my_image.png"

function Header()
{
    return (
        <div className="header">

            <img src={ displayPicture } alt="my photo" />

            <div className="details">

                <h1>Tousif Hoque</h1>

                <h3>Software Engineer</h3>

                <h5>Learning the art of software development</h5>

            </div>

            <div className="btns">
                <a href="#" className="_btn email"><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;Email</a>
                <a href="#" className="_btn linked"><i className="fa fa-linkedin-square" aria-hidden="true"></i>&nbsp;&nbsp;Linkedin</a>
            </div>

        </div>
    )
}

export default Header