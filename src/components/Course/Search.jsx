import React from "react";
import SearchImg from "../../assets/images/search.svg";
import Add from "../../assets/images/Vector.svg";
import * as S from './styled';

const Search = ({ selected, onAddCourseClick }) => { // 이벤트 핸들러 추가
    return (
        <>
            <S.SearchContainer>
                {selected === 1 ? 
                    <>
                        <S.SearchText>다른 사람들의 코스를 참고 할 수 있어요.</S.SearchText>
                        <S.SearchInput placeholder="    검색"/>
                        <S.SearchButton><img src={SearchImg} alt="Search"/></S.SearchButton>
                        <S.InfoText>지하철역 / 장소를 검색해보세요</S.InfoText>
                    </> :
                    <> 
                        <S.SearchText>나만의 장소를 조합해 코스를 만들 수 있어요.</S.SearchText>
                        <S.AddButton onClick={onAddCourseClick}>코스 만들기<img src={Add} alt="Add"/></S.AddButton>
                    </>}
            </S.SearchContainer>
            <S.Hr2/>
        </>  
    );
}

export default Search;
