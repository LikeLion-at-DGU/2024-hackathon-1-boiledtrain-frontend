import React from "react";
import Info from "../components/Mypage/Info";
import Mytrip from "../components/Mypage/Mytrip";
import Bottom from "../components/Common/BottomBar";
import styled from "styled-components";

const BottomStyle = styled.div`
    position: absolute;

    bottom: 0px;
    width: 430px;
    height: 77px;
    background: #00ABFC;
`;
const Mypage=()=>{
    
    return(
        <div>
            <Info/>
            <Mytrip/>
            <BottomStyle>
                <Bottom />
            </BottomStyle>
        </div>
    )
}
export default Mypage;