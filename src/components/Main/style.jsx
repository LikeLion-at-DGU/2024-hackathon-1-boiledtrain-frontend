import styled from "styled-components";
import '../../styles/font.css';

export const CenterBar = styled.div`
  width: 230px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 4px solid #00ABFC;
  background: #FFF;
`;

export const Bar = styled.div`
  width: 120px;
  height: 11px;
  background: #00ABFC;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 430px;
  padding-top: 45px;
`;

export const Board = styled.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  width: 270px;
  height: 480px;
  flex-shrink: 0;
  border-radius: 21px;
  background: #FFF;
  box-shadow: -7px 13px 18.8px 0px rgba(0, 0, 0, 0.30);
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`;

export const ClosedBox = styled.div`
  display: flex;
  height: 32px;
  padding: 6.961px 16.961px 6.963px 235.001px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`;

export const Closed = styled.img`
  width: 18.037px;
  height: 18.075px;
  flex-shrink: 0;
`;

export const Face = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: -22px;
`;

export const text = styled.div`
  color: #000;
  font-family: "SF Pro";
  font-size: 18.7px;
  font-style: normal;
  font-weight: 590;
  line-height: 24.2px;
`;

export const text2 = styled.div`
  color: #8E8E8E;
  font-family: "SF Pro";
  font-size: 12px;
  font-style: normal;
  font-weight: 590;
  line-height: 24.2px;
`;

export const newtext = styled.div`
  color: #000;
  font-family: "SF Pro";
  width: 250px;
  font-size: 18.7px;
  font-style: normal;
  font-weight: 590;
  line-height: 24.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const myprofile = styled.button`
  align-items: center;
  display: flex;
  width: 228px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 17.5px;
  background: var(--Colors-Blue, #007AFF);
  color: #FFF;
  font-family: "SF Pro";
  font-size: 15px;
  font-style: normal;
  font-weight: 590;
  line-height: 24.2px;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer; 
  &:active {
    background: #004494;
    transform: scale(0.98);
  }
`;

export const newmyprofile = styled.button`
  align-items: center;
  display: flex;
  width: 110px;
  height: 35px;
  border-radius: 17.5px;
  background: var(--Colors-Blue, #007AFF);
  color: #FFF;
  font-family: "SF Pro";
  font-size: 15px;
  font-style: normal;
  font-weight: 590;
  line-height: 24.2px;
  justify-content: center;
  text-align: left;
  border: none;
  outline: none;
  cursor: pointer; 
  &:active {
    background: #004494;
    transform: scale(0.98);
  }
`;

export const logout = styled.button`
  align-items: center;
  display: flex;
  width: 92px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 17.5px;
  background: var(--Colors-Blue, #007AFF);
  color: #FFF;
  font-family: "SF Pro";
  font-size: 15px;
  font-style: normal;
  font-weight: 590;
  line-height: 24.2px;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer; 
  &:active {
    background: #004494;
    transform: scale(0.98);
  }
  position: absolute;
  bottom:28px;
  left:23px;
`;

export const Newbox = styled.div`
  display: flex;
  flex-direction: row; 
`;

export const box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

export const line = styled.div`
  width: 228px;
  height: 2px;
  flex-shrink: 0;
  background: #D9D9D9;
  margin-top: 6px;
`;

export const Ticket = styled.img`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
`;

export const AllText = styled.div`
  color: #000;
  font-family: "SF Pro";
  font-size: 15px;
  font-style: normal;
  font-weight: 590;
  line-height: 24.2px;
`;

export const Route = styled.img`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
`;

export const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 133px;
`;

export const Shape = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  align-items: center;
  gap: 12px;
`;

export const NewShape = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  gap: 12px;
`;

export const Shape1 = styled.button`
  display: flex;
  flex-direction: row;
  height: 35px;
  align-items: center;
  gap: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #FFFFFF;
  &:active {
    background: #FFFFFF;
    transform: scale(0.98);
  }
`;

export const Shape2 = styled.button`
  display: flex;
  flex-direction: row;
  height: 35px;
  align-items: center;
  gap: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #FFFFFF;
  &:active {
    background: #FFFFFF;
    transform: scale(0.98);
  }
`;

export const AllShape = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  gap: 14px;
`;

export const name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const middle = styled.div`
  padding-left: 21px;
`;
