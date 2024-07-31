import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 import합니다.
import * as S from "./style";
import plus from "../../assets/images/plusbtn.png";

function DiaryPlus() {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 객체를 가져옵니다.

  const handleButtonClick = () => {
    // 글쓰기 페이지로 이동합니다.
    navigate("/diarywrite"); // useNavigate를 사용하여 페이지 이동
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
