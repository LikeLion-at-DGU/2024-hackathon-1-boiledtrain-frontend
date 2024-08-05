import React from 'react';
import { AddedContainer, PlaceAddedContentContainer, PlaceAddedImg, PlaceDeleteImg, PlaceOrder } from "./styled";
import stopimg from "../../assets/images/stop.svg";
import emptyimg from "../../assets/images/loading.png";

const AddedPlace = ({ placeName, placeAddress, placeCategory, onDelete, order, photoUrl }) => {
    // Use emptyimg if photoUrl is not available
    const imageSrc = photoUrl || emptyimg;

    return (
        <AddedContainer>
            <PlaceDeleteImg src={stopimg} alt="Delete" onClick={onDelete} />
            <PlaceAddedImg src={imageSrc} alt={placeName} />
            <PlaceAddedContentContainer>
                <div>{placeName}</div>
                <div style={{ fontSize: '11px', color: 'gray' }}>{placeAddress}</div>
                <div>{placeCategory}</div>
            </PlaceAddedContentContainer>
            <PlaceOrder>{order}</PlaceOrder>
        </AddedContainer>
    );
};

export default AddedPlace;
