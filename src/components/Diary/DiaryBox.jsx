import styled from "styled-components";
import { Link } from "react-router-dom";
import * as S from "./style";
import Photo from "../../assets/images/baseimage.png";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const DiaryBox = ({ data }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <StyledLink to={`/diarydetail/${data.id}`}>
      <S.DiaryBoxContainer>
        <S.BoxPhoto src={data.image || Photo} alt="일기 이미지" /> 
        <S.BoxTitle>{data.title}</S.BoxTitle>
        <S.BoxContent>{data.content}</S.BoxContent>
        <S.DateStation>
          <S.BoxDate>{formatDate(data.created_at)}</S.BoxDate> 
          <S.Bar>|</S.Bar>
          <S.BoxStation>#{data.course}</S.BoxStation>
        </S.DateStation>
        <S.BoxLine> </S.BoxLine>
      </S.DiaryBoxContainer>
    </StyledLink>
  );
};

export default DiaryBox;
