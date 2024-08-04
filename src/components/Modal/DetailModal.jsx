import React, { useState } from "react";
import * as S from "./style";
import Base from '../../assets/images/baseimage.png';
import Main from '../../assets/images/mainch.png';
import RandomMap from '../RandomMap/RandomMap';
import PlusCourseRandom from "../PlusCourse/PlusCourseRandom";

function DetailModal({ isOpen, onClose, placeDetails, getPhotoUrl, subwayStation }) {
    const [showMap, setShowMap] = useState(false);
    const [placeIds, setPlaceIds] = useState([]);
    const [isExiting, setIsExiting] = useState(false);
    const [showPlusCourse, setShowPlusCourse] = useState(false);

    const handleCourseClick = () => {
        const ids = placeDetails.map(place => place.nearby_place.place_id);
        setPlaceIds(ids);
        setShowMap(true);
        setShowPlusCourse(true); // 코스 추가 버튼을 표시
    };

    const handleClose = () => {
        setIsExiting(true);
        setTimeout(() => {
            setShowMap(false);
            onClose();
            setShowPlusCourse(false);
            setIsExiting(false); 
        }, 200);
    };

    if (!isOpen || !placeDetails || placeDetails.length === 0) return null;

    return (
        <div>
            {showMap && showPlusCourse && (
                <PlusCourseRandom subwayStation={subwayStation} placelist={placeIds} />
            )}
            <S.ModalTotal2 $isExiting={isExiting}>
                <S.Head>
                    <S.Icon src={Main} />
                    <S.HeadMent>{subwayStation}역 코스<S.CloseButton onClick={handleClose}>✖</S.CloseButton></S.HeadMent>
                </S.Head>
                <S.Body>
                    {showMap ? (
                        <RandomMap placeIds={placeIds} onClose={handleClose} />
                    ) : (
                        <>
                            <S.Box>
                                {placeDetails.map((place, index) => (
                                    <>
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
                                    <div>
                                    <hr style={{ width: '380px', height: '1px', background: '#E7E7E7', border: 'none', marginBottom: '0px',marginTop: '0px' }} />
                                    </div>
                                    </>
                                ))}
                            </S.Box>
                            <S.Btn>
                                <S.ClosedBtn onClick={handleClose}>닫기</S.ClosedBtn>
                                <S.PushBtn onClick={handleCourseClick}>코스 삶기!</S.PushBtn>
                            </S.Btn>
                        </>
                    )}
                </S.Body>
            </S.ModalTotal2>
        </div>
    );
}

export default DetailModal;
