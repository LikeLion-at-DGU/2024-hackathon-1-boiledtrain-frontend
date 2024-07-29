import react from "react";
import { useState } from "react";
import { AddedContainer, PlaceAddedContentContainer,PlaceAddedImg, PlaceDeleteImg } from "./styled";
import stopimg from "../../assets/images/stop.svg"

const AddedPlace = ()=>{
    return(
        <>
            <AddedContainer>
                <PlaceDeleteImg src={stopimg}/>
                <PlaceAddedImg></PlaceAddedImg>
                <PlaceAddedContentContainer>
                    <div>장소이름</div>
                    <div style={{fontSize:'11px', color: ' '}}>주소</div>
                    <div style={{fontSize:'11px'}}>카테고리</div>
                </PlaceAddedContentContainer>
            </AddedContainer>
        </>
    )
}

export default AddedPlace;