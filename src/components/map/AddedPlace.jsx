import React from 'react';
import { AddedContainer, PlaceAddedContentContainer, PlaceAddedImg, PlaceDeleteImg, PlaceOrder } from "./styled";
import stopimg from "../../assets/images/stop.svg";

const AddedPlace = ({ placeName, placeAddress, placeCategory, onDelete, order, photoUrl }) => {
    return (
        <AddedContainer>
            <PlaceDeleteImg src={stopimg} alt="Delete" onClick={onDelete} />
            <PlaceAddedImg src={photoUrl} alt={placeName} />
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
