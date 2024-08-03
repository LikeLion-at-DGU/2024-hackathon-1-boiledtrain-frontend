import React from "react";
import * as S from "./style";
import home from "../../assets/images/home.png";
import diary from "../../assets/images/diary.png"; 
import course from "../../assets/images/course.png"; 
import mypage from "../../assets/images/mypage.png"; 
import { Link } from 'react-router-dom';

//링크는 모두 임시로 넣어둠. 수정해야함


function BottomBar() {
  return (
    <S.Head>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <S.Home>
      <S.Allimage src={home} alt="home" />홈
      </S.Home>
      </Link>
      <Link to="/diarymain" style={{ textDecoration: 'none', color: 'inherit' }}>
      <S.Home>
      <S.Allimage src={diary} alt="diary" />삶은 일기
      </S.Home>
      </Link>
      <Link to="/course" style={{ textDecoration: 'none', color: 'inherit' }}>
      <S.Home>
      <S.Allimage src={course} alt="course" />삶은 코스
      </S.Home>
      </Link>
      <Link to="/mypage" style={{ textDecoration: 'none', color: 'inherit' }}>
      <S.Home>
      <S.Allimage src={mypage} alt="mypage" />My Page
      </S.Home>
      </Link>
    </S.Head>
  );
}

export default BottomBar;