import React from "react"

import displayPicture from "../Images/my_image.png"

function Header()
{
    return (
        <div>

            <img src={ displayPicture } alt="my photo" />

            <h1>Tousif Hoque</h1>

            <h3>Software Engineer</h3>

            <p>Learning the art of software development</p>

            <div>
                <a href="#" class="btn"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;Email</a>
                <a href="#" class="btn"><i class="fa fa-linkedin-square" aria-hidden="true"></i>&nbsp;&nbsp;Linkedin</a>
            </div>

        </div>
    )
}

export default Header