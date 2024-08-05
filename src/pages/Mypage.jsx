import React from "react";
import Info from "../components/Mypage/Info";
import Mytrip from "../components/Mypage/Mytrip";
import Bottom from "../components/Common/BottomBar";
import styled from "styled-components";
import Zzimtrip from "../components/Mypage/Zzimtrip";

const BottomStyle = styled.div`
    position: absolute;
    bottom: 0px;
    width: 430px;
    height: 77px;
    background: #00ABFC;
`;

const PageContainer = styled.div`
    position: relative;
    height: 873px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;
const Mypage=()=>{
    
    return(
        <PageContainer>
            <Info/>
            <Mytrip/>
            <Zzimtrip/>
            <BottomStyle>
                <Bottom />
            </BottomStyle>
        </PageContainer>
    )
}
export default Mypage;