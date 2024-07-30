// src/components/AddedPlace.js
import React from 'react';
import { AddedContainer, PlaceAddedContentContainer, PlaceAddedImg, PlaceDeleteImg } from "./styled";
import stopimg from "../../assets/images/stop.svg";

const AddedPlace = ({ placeName, placeAddress, placeCategory }) => {
    return (
        <AddedContainer>
            <PlaceDeleteImg src={stopimg} alt="Delete" />
            <PlaceAddedImg />
            <PlaceAddedContentContainer>
                <div>{placeName}</div>
                <div style={{ fontSize: '11px', color: 'gray' }}>{placeAddress}</div>
                <div>{placeCategory}</div>
            </PlaceAddedContentContainer>
        </AddedContainer>
    );
};

export default AddedPlace;
