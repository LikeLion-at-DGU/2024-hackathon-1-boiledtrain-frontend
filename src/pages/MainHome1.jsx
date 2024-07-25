import React from "react";
import TopBar from "../components/intro2/TopBar";
import Head from "../components/intro2/Head";
import Subwayai from "../components/intro2/Subwayai";
import Main from "../components/intro2/Main"

const MainHome1=()=>{
    return(
        <div style={{backgroundColor:'rgba(0, 171, 252, 1)'}}>
            <TopBar/>
            <Head/>
            <Subwayai/>
            <Main/>
        </div>
    )
}

export default MainHome1;