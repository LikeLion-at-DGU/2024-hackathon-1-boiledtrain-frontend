import React from "react";
import { useNavigate } from "react-router-dom"; 
import * as S from "./style";
import plus from "../../assets/images/plusbtn.png";

function DiaryPlus() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate("/diarywrite");
  };

  return (
    <S.DiaryPlusContainer>
      <S.MentBtn onClick={handleButtonClick}>
        <S.PlusMent>글쓰기</S.PlusMent>
        <S.PlusImage src={plus} alt="plus" />
      </S.MentBtn>
    </S.DiaryPlusContainer>
  );
}

export default DiaryPlus;
