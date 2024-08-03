import styled, { keyframes, css } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const ModalTotal = styled.div`
  width: 430px;
  height: 608px;
  flex-shrink: 0;
  border-radius: 60px 60px 0px 0px;
  border: 1px solid #D9D9D9;
  background: #FFF;
  margin-bottom:75px;
  box-shadow: 0px 3px 21.5px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ $isExiting }) => $isExiting ? css`${slideDown} 0.5s ease-out forwards` : css`${slideUp} 0.5s ease-out forwards`}; 
`;

export const ModalTotal2 = styled.div`
  width: 430px;
  height: 618px;
  flex-shrink: 0;
  border-radius: 60px 60px 0px 0px;
  border: 1px solid #D9D9D9;
  background: #FFF;
  margin-bottom:75px;
  box-shadow: 0px 3px 21.5px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ $isExiting }) => $isExiting ? css`${slideDown} 0.5s ease-out forwards` : css`${slideUp} 0.5s ease-out forwards`}; 
`;

export const Icon = styled.img`
  width: 74px;
  height: 46px;
`;

export const HeadMent = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px;
  padding-top: 10px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 430px;
  height: 45px;
  padding: 30px 137px 0px 138px;
  margin-bottom: 43px;
`;

export const Head2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 430px;
  height: 45px;
  padding: 30px 137px 0px 138px;
  margin-bottom: 22px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlaceContainer = styled.div`
  display: flex;
  align-items: center; 
  margin-bottom: 10px;
`;

export const MidBox = styled.div`
  display: flex;
  flex-direction: column; 
  margin-left: 20px;
  height: 150px; 
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 120px;
`;

export const Btn = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 330px;
  gap: 20px;
`;

export const ClosedBtn = styled.button`
  width: 103px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #00ABFC;
  color: #FFF;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24.2px;
  cursor: pointer;
  border: none;
  margin-left: 30px;
`;

export const PushBtn = styled.button`
  width: 188px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #00ABFC;
  color: #FFF;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24.2px;
  cursor: pointer;
  border: none;
`;

export const Name = styled.div`
  color: #000;
  width: 160px;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.2px;
  margin-top: 17px;
`;

export const Cate = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24.2px;
`;

export const Point = styled.div`
  color: #8C8C8C;
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24.2px;
`;

export const CloseButton = styled.button`
  position: absolute;
  transform: translate(100px, -55px);
  background: none;
  border: none;
  font-size: 24px;
  color: #000; 
  cursor: pointer;
  &:hover {
    color: #ff0000; 
  }
`;
