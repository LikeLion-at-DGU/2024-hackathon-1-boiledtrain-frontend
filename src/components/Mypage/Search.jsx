import React from "react";
import * as S from "./style";
import btn from "../../assets/images/btn.png";


function Search() {
  return (
    <S.SearchContainer>
      <S.SearchInput placeholder="검색하기" />
      <S.Btn src={btn} alt="btn" />
    </S.SearchContainer>
  );
}

export default Search;