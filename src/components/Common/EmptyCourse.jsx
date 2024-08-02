import tr from "../../assets/images/tr.jpg";
import React from "react";
import * as S from "../Diary/style"

function EmptyCourse(){
    return(
      <S.EmptyTotal>
        <S.DiaryEmptyContainer>
          <S.EmptyPhoto src={tr} alt="tr" />
            <S.EmptyTitle>아직 등록된 코스가 없어요!<br/>
            코스를 만들어 주세요.
          </S.EmptyTitle>
        </S.DiaryEmptyContainer>
      </S.EmptyTotal>
    )
}

export default EmptyCourse;