import styled from "styled-components";
import '../../styles/font.css';

export const SearchContainer = styled.div`
  width: 313px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #E7E7E7;
  display: flex;
  align-items: center;
  padding: 0 13px; /* 좌우 패딩 추가 */
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  outline: none;
  color: #000000;
  font-family: "SF Pro";
  font-size: 15px;
  font-weight: 590;
  line-height: 24.2px; /* 161.333% */
  
  &::placeholder {
    color: #8C8C8C;
  }
`;

export const Btn = styled.img`
  width: 22px;
  height: 22px;
  fill: #00ABFC;
  flex-shrink: 0;
  padding-right:6px;
`;
