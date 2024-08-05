import React from "react";
import TopBar from "../components/intro2/TopBar";
import Head from "../components/intro2/Head";
import Subwayai from "../components/intro2/Subwayai";
import Main from "../components/intro2/Main"
import styled from "styled-components";

const PageContainer = styled.div`
position: relative;
height: 873px;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
`;

const MainHome1=()=>{
    return(
        <PageContainer>
        <div style={{backgroundColor:'rgba(0, 171, 252, 1)'}}>
            <TopBar/>
            <Head/>
            <Subwayai/>
            <Main/>
        </div>
        </PageContainer>
    )
}

export default MainHome1;