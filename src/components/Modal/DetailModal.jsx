import React from "react";
import * as S from "./style";
import Image from "../../assets/images/tr.jpg";

function DetailModal({ isOpen, onClose, placeDetails }) {
    if (!isOpen || !placeDetails) return null;

    return (
        <S.ModalTotal>
            <S.Head>
                <S.Icon src={Image} />
                <h2>{placeDetails.name}</h2>
                <h3>{placeDetails.subwayStation}</h3> {/* 추가된 부분 */}
            </S.Head>
            <S.Body>
                <S.Box>
                    {placeDetails.photoUrl ? (
                        <img src={placeDetails.photoUrl} alt={placeDetails.name} style={{ width: '100%', height: 'auto' }} />
                    ) : (
                        <p>이미지가 없습니다.</p>
                    )}
                    <p>{placeDetails.rating || '주소 정보가 없습니다.'}</p>
                </S.Box>
            </S.Body>
            <S.Btn>
                <S.ClosedBtn onClick={onClose}>닫기</S.ClosedBtn>
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
