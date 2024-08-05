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
          "Sorry!😖"
        </div>
        <br />
        <br />
        죄송합니다, <br />
        페이지를 찾을 수 없습니다 <br />
        <br />
      </BackGroundColor>
    </>
  );
};

export default NotFound;