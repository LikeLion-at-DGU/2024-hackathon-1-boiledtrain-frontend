import React from "react";
import * as S from "./style";
import Photo from '../../assets/images/pointer.png';

const DiaryBox = ({ data }) => {
  return (
      <S.DiaryBoxContainer to={`/detail/${data.id}`}>
          <S.BoxPhoto src={Photo} />
          <S.BoxTitle>{data.title}</S.BoxTitle>
          <S.BoxContent>{data.content}</S.BoxContent>
          <S.DateStation>
          <S.BoxDate>{data.created_at}</S.BoxDate>
          <S.Bar>|</S.Bar>
          <S.BoxStation>#{data.course}</S.BoxStation>
          </S.DateStation>
          <S.BoxLine> </S.BoxLine>
      </S.DiaryBoxContainer>
  );
};

export default DiaryBox;


// function DiaryBox(){
//     return(
//         <S.DiaryBoxContainer>
//             <S.BoxPhoto></S.BoxPhoto>
//             <S.BoxTitle>제목</S.BoxTitle>
//             <S.BoxContent>내용 미리보기</S.BoxContent>
//             <S.DateStation>
//             <S.BoxDate>2024.11.06</S.BoxDate>
//             <S.Bar>|</S.Bar>
//             <S.BoxStation>#@@역</S.BoxStation>
//             </S.DateStation>
//             <S.BoxLine> </S.BoxLine>
//         </S.DiaryBoxContainer>
//     )
// }

// export default DiaryBox;