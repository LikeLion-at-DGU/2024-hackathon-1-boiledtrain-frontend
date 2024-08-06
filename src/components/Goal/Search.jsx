import React, { useState } from 'react';
import * as S from './style';
import btn from '../../assets/images/btn.png';

const options = [
  { value: '', label: '선택하기' },
  { value: '박물관 및 전시회', label: '박물관 및 전시회 관람\n눈이 즐거운 박물관과 전시회를 메인으로 코스를 삶아드려요.' },
  { value: '카페', label: '카페 투어\n유명 분위기 좋은 카페를 메인으로 코스를 삶아드려요.' },
  { value: '맛집', label: '맛집 방문\n추천 맛집을 메인으로 코스를 삶아드려요.' },
  { value: '서점', label: '서점 방문\n여유롭게 책을 읽을 서점을 메인으로 코스를 삶아드려요.' },
  { value: '베이커리', label: '빵집 방문\n고소한 냄새가 풍기는 빵집을 메인으로 코스를 삶아드려요.' },
];

function Search({ onCategorySelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onCategorySelect(option.value);
    setIsOpen(false);
  };

  return (
    <S.SearchContainer>
      <S.DropdownButton onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isOpen}>
        {selectedOption.value ? (
          selectedOption.label.split('\n')[0]
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