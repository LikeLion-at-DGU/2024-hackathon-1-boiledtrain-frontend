import React, { useEffect, useState } from 'react';
import subwayInfo from '../../../subwayinfo.json';
import * as S from "./style";
import sea from '../../assets/images/search.png';

function Header() {
  const [keyword, setKeyword] = useState("");
  const [keyItems, setKeyItems] = useState([]);
  const [selectedStation, setSelectedStation] = useState("");

  const onChangeData = (e) => {
    setKeyword(e.currentTarget.value);
  };

  const updateData = () => {
    const filteredSubways = subwayInfo.DATA
      .filter(subway => subway.station_nm.includes(keyword))
      .slice(0, 10);
    
    const uniqueSubways = Array.from(
      new Map(filteredSubways.map(item => [item.station_nm, item])).values()
    );

    setKeyItems(uniqueSubways);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateData();
      else setKeyItems([]);
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  const handleIconClick = () => {
    if (keyword) {
      setSelectedStation(keyword);
      setKeyItems([]); 
    }
  };

  return (
    <S.SearchContainer>
      <S.Search 
        value={keyword} 
        onChange={onChangeData} 
        placeholder="검색"
        onFocus={() => setSelectedStation("")}
      />
      {/* <S.Searchicon src={sea} alt="icon" onClick={handleIconClick} /> */}

      {keyItems.length > 0 && keyword && !selectedStation && (
        <S.AutoSearchContainer>
          <S.AutoSearchWrap>
            {keyItems.map((item) => (
              <S.AutoSearchData
                key={item.station_nm} 
                onClick={() => {
                  console.log(`Selected Station: ${item.station_nm}`);
                  setKeyword(item.station_nm);
                  setSelectedStation(item.station_nm);
                  setKeyItems([]); 
                }}
              >
                <a href="#">{item.station_nm}</a>
              </S.AutoSearchData>
            ))}
          </S.AutoSearchWrap>
        </S.AutoSearchContainer>
      )}
      {selectedStation && (
        <S.SelectedStation>
          선택된 역 : {selectedStation}
        </S.SelectedStation>
      )}
    </S.SearchContainer>
  );
}

export default Header;