import React, { useState } from 'react';
import * as S from './style';
import btn from '../../assets/images/btn.png';

const options = [
  { value: '', label: '선택하기' },
  { value: 'museum', label: '박물관 관람\n눈이 즐거운 박물관을 메인으로 코스를 삶아드려요.' },
  { value: 'cafe', label: '카페 투어\n유명 분위기 좋은 카페를 메인으로 코스를 삶아드려요.' },
  { value: 'restaurant', label: '맛집 방문\n추천 맛집을 메인으로 코스를 삶아드려요.' },
  { value: 'book_store', label: '서점 방문\n여유롭게 책을 읽을 서점을 메인으로 코스를 삶아드려요.' },
  { value: 'department_store', label: '백화점 방문\n여러 즐길거리가 있는 백화점을 메인으로 코스를 삶아드려요.' },
  { value: 'park', label: '공원 산책\n산책을 즐길 수 있는 공원을 메인으로 코스를 삶아드려요.' },
  { value: 'art_gallery', label: '미술관 관람\n작품을 감상할 수 있는 미술관을 메인으로 코스를 삶아드려요.' },
  { value: 'bakery', label: '빵집 방문\n고소한 냄새가 풍기는 빵집을 메인으로 코스를 삶아드려요.' },
];

function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <S.SearchContainer>
      <S.DropdownButton onClick={toggleDropdown}>
        {selectedOption.value ? (
          selectedOption.label.split('\n')[0] // \n 이전의 텍스트만 표시
        ) : (
          <S.PlaceholderText>{selectedOption.label}</S.PlaceholderText>
        )}
        <S.Arrow src={btn} alt="arrow" />
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownMenu>
          {options.map((option) => (
            <S.DropdownItem
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label.split('\n').map((line, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                  {index === 0 ? (
                    <S.PrimaryText>{line}</S.PrimaryText>
                  ) : (
                    <S.SecondaryText>{line}</S.SecondaryText>
                  )}
                </div>
              ))}
            </S.DropdownItem>
          ))}
        </S.DropdownMenu>
      )}
    </S.SearchContainer>
  );
}

export default Search;