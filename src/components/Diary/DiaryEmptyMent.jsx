import React from "react";
import * as S from "./style";
import tr from "../../assets/images/tr.jpg";

function DiaryEmpty(){
    return(
      <S.EmptyTotal>
        <S.DiaryEmptyContainer>
          <S.EmptyPhoto src={tr} alt="tr" />
            <S.EmptyTitle>아직 작성된 일기가 없어요!<br/>
            여행 일기를 삶아주세요.
          </S.EmptyTitle>
        </S.DiaryEmptyContainer>
      </S.EmptyTotal>
    )
}

export default DiaryEmpty;