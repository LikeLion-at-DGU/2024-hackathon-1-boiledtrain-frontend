import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 430px;
  height: 873px;
  overflow: hidden;
  background-color: white;
`;
export const Image = styled.img`
  width: 430px;
  height: 873px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(4px);
  z-index: 1;
`;
export const Overlay = styled.div`
  position: relative;
  width: 430px;
  height: 873px;
  z-index: 2; 
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: 80px;
  align-items: center;
  gap:20px;
  padding-Top:30px;
`;

export const LoginButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 58px;
  background: #00ABFC;
  color: #FFF;
  text-align: center;
  font-family: "SF Pro";
  font-size: 20px;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
  border: 2px solid #007bff;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  &:active {
    background: #007bff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); 
    transform: translateY(2px);
  }
`;

export const SubText = styled.span`
  margin-top: 8px;
  color: #FFF;
  text-align: center;
  font-family: "SF Pro";
  font-size: 10px;
  font-style: normal;
  font-weight: 510;
  line-height: normal;
`;

export const Container2 = styled.div`
  width: 110px;
  height: 110px;
  overflow: hidden;
`;

export const Image2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;