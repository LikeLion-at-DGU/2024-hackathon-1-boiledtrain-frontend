import React from "react";
import * as S from "./style";
import Image from "../../assets/images/tr.jpg";

function DetailModal({ isOpen, onClose, placeDetails }) {
    if (!isOpen || !placeDetails) return null; // 모달이 열려있지 않거나 장소 정보가 없으면 아무것도 렌더링하지 않음

    return (
        <S.ModalTotal>
            <S.Head>
            <S.Icon src={Image} />
                {/* 장소 이름 표시 */}
                <h2>{placeDetails.name}</h2>
            </S.Head>
            <S.Body>
                <S.Box>
                    {/* 장소 이미지 */}
                    {placeDetails.photoUrl ? (
                        <img src={placeDetails.photoUrl} alt={placeDetails.name} style={{ width: '100%', height: 'auto' }} />
                    ) : (
                        <p>이미지가 없습니다.</p>
                    )}
                    {/* 주소 표시 */}
                    <p>{placeDetails.address || '주소 정보가 없습니다.'}</p>
                </S.Box>
            </S.Body>
            <S.Btn>
                {/* 모달 닫기 버튼 */}
                <S.ClosedBtn onClick={onClose}>닫기</S.ClosedBtn>
                {/* 추가 버튼 (필요 시) */}
                <S.PushBtn>추가 정보</S.PushBtn>
            </S.Btn>
        </S.ModalTotal>
    );
}

export default DetailModal;


// import React from "react";
// import * as S from "./style";
// import Image from "../../assets/images/tr.jpg";

// function DetailModal(){
//     return(
//       <S.ModalTotal>
//         <S.Head>
//         <S.Icon src={Image} />
//         </S.Head>
//         <S.Body>
//             <S.Box>
//             </S.Box>
//           </S.Body>
//           <S.Btn>
//           <S.ClosedBtn></S.ClosedBtn>
//           <S.PushBtn></S.PushBtn>
//           </S.Btn>
//       </S.ModalTotal>
//     )
// }

// export default DetailModal;
