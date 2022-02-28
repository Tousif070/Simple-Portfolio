import React from "react"

import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

function App()
{
    return (
        <div className="main-div">
            <div className="content">
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    )
}

export default App