// 봄 축제 사이트 NotFound.jsx 코드보고 따옴
// 에러 날 때 사이트
import React from "react";
import styled from "styled-components";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f1f2fb;

  color: #111;
  font-size: 28px;
  font-family: Pretendard;
`;

const NotFound = () => {
  return (
    <>
      <BackGroundColor>
        <br />
        <div style={{ fontSize: "50px", color: "#F7634E", fontWeight: "900" }}>
          "Oops! 😖😖"
        </div>
        <br />
        <br />
        Sorry, <br />
        the page not found <br />
        <br />
      </BackGroundColor>
    </>
  );
};

export default NotFound;