import React from "react"

import displayPicture from "../Images/my_image.png"

function Header()
{
    return (
        <div>

            <img src={ displayPicture } alt="my photo" />

            <h1>Tousif Hoque</h1>

            <h2>Software Engineer</h2>

            <p>Learning the art of software development</p>

        </div>
    )
}

export default Header