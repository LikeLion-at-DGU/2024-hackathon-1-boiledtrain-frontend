import styled from "styled-components";
import { Link } from "react-router-dom";
import * as S from "./style";
import Photo from "../../assets/images/baseimage.png";

const StyledLink = styled(Link)`
  text-decoration: none; // 링크 기본 스타일 제거
  color: inherit; // 상속받은 색상 사용
`;

const DiaryBox = ({ data }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 1월은 0이므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <StyledLink to={`/diarydetail/${data.id}`}>
      <S.DiaryBoxContainer>
        {/* BoxPhoto에 data.image를 사용하여 이미지 변경 */}
        <S.BoxPhoto src={data.image || Photo} alt="일기 이미지" /> {/* 기본 이미지 설정 */}
        <S.BoxTitle>{data.title}</S.BoxTitle>
        <S.BoxContent>{data.content}</S.BoxContent>
        <S.DateStation>
          <S.BoxDate>{formatDate(data.created_at)}</S.BoxDate> {/* 포맷된 날짜 사용 */}
          <S.Bar>|</S.Bar>
          <S.BoxStation>#{data.course}</S.BoxStation>
        </S.DateStation>
        <S.BoxLine> </S.BoxLine>
      </S.DiaryBoxContainer>
    </StyledLink>
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