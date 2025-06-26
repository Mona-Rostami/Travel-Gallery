import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/NavBar";
import Hiro from "./components/Hiro"
import Gallery from "./components/Gallery";
import Photlist from "./components/photocontry";
import Sende from "./components/contact";
function App(){
    return(
        <div>
            <TopBar/>
            <Navbar/>
            <Hiro/>
            <Gallery/>
            <Sende />
            <Photlist></Photlist>
        </div>
    )
}
export default App