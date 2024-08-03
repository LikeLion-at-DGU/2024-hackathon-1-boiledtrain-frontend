import React, { useState } from "react";
import * as S from "./style";
import Main from "../../assets/images/mainch.png";
import Base from "../../assets/images/baseimage.png";
import RandomMapGoal from '../RandomMap/RandomMapGoal';
import PlusCourseGoal from "../PlusCourse/PlusCourseGoal";

function DetailModalGoal({ isOpen, onClose, places, getPhotoUrl, subwayStation }) {
    const [showMap, setShowMap] = useState(false);
    const [placeIds, setPlaceIds] = useState([]);
    const [isExiting, setIsExiting] = useState(false);
    const [showPlusCourse, setShowPlusCourse] = useState(false);

    const handleCourseClick = () => {
        const ids = places.map(place => place.nearby_place.place_id);

        places.forEach(place => {
            if (place.additional_places) {
                const additionalIds = place.additional_places.map(additionalPlace => additionalPlace.place_id);
                ids.push(...additionalIds);
            }
        });

        setPlaceIds(ids);
        setShowPlusCourse(true); 
        setShowMap(true); // showMap 상태를 true로 설정
    };

    const handleClose = () => {
        setIsExiting(true);
        setTimeout(() => {
            setShowMap(false);
            setShowPlusCourse(false);
            onClose(); 
            setIsExiting(false); 
        }, 200); 
    };

    if (!isOpen || !places || places.length === 0) return null;

    return (
        <div>
            {showPlusCourse && <PlusCourseGoal placeIds={placeIds} onClose={() => setShowPlusCourse(false)} />}
            <S.ModalTotal $isExiting={isExiting}>
                <S.Head2>
                    <S.Icon src={Main} />
                    <S.HeadMent>{subwayStation}역 코스
                        <S.CloseButton onClick={handleClose}>✖</S.CloseButton>
                    </S.HeadMent>
                </S.Head2>
                <S.Body>
                    {showMap ? (
                        <RandomMapGoal placeIds={placeIds} onClose={handleClose} />
                    ) : (
                        <>
                            <S.Box>
                                {places.map((place, index) => (
                                    <S.PlaceContainer key={index} style={{ marginBottom: '0px' }}>
                                        {place.nearby_place.photo_reference ? (
                                            <img 
                                                src={getPhotoUrl(place.nearby_place.photo_reference)} 
                                                alt={place.nearby_place.name} 
                                                style={{ width: '178px', height: '114px' }} 
                                            />
                                        ) : (
                                            <img 
                                                src={Base} 
                                                alt="기본 이미지" 
                                                style={{ width: '178px', height: '114px' }} 
                                            />
                                        )}
                                        <S.MidBox>
                                            <S.Name>{place.nearby_place.name}</S.Name>
                                            <S.Cate>{place.category}</S.Cate>
                                            <S.Point>평점 : {place.nearby_place.rating || '평점 정보가 없습니다.'}점</S.Point>
                                        </S.MidBox>
                                    </S.PlaceContainer>
                                ))}
                                {places.flatMap(place => place.additional_places || []).map((additionalPlace, index) => (
                                    <S.PlaceContainer key={index} style={{ marginBottom: '0px' }}>
                                        {additionalPlace.photo_reference ? (
                                            <img 
                                                src={getPhotoUrl(additionalPlace.photo_reference)} 
                                                alt={additionalPlace.name} 
                                                style={{ width: '178px', height: '114px' }} 
                                            />
                                        ) : (
                                            <img 
                                                src={Base} 
                                                alt="기본 이미지" 
                                                style={{ width: '178px', height: '114px' }} 
                                            />
                                        )}
                                        <S.MidBox>
                                            <S.Name>{additionalPlace.name}</S.Name>
                                            <S.Cate>{additionalPlace.category}</S.Cate>
                                            <S.Point>평점 : {additionalPlace.rating || '평점 정보가 없습니다.'}점</S.Point>
                                        </S.MidBox>
                                    </S.PlaceContainer>
                                ))}
                            </S.Box>
                            <S.Btn>
                                <S.ClosedBtn onClick={handleClose}>닫기</S.ClosedBtn>
                                <S.PushBtn onClick={handleCourseClick}>코스 삶기!</S.PushBtn>
                            </S.Btn>
                        </>
                    )}
                </S.Body>
            </S.ModalTotal>
        </div>
    );
}

export default DetailModalGoal;
