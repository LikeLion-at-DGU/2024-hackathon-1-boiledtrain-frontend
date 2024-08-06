import React, { useEffect, useState } from "react";
import Head from "../components/Diary/DiaryHead";
import DiaryBox from "../components/Diary/DiaryBox";
import Plus from "../components/Diary/DiaryPlus";
import EmptyMent from "../components/Diary/DiaryEmptyMent";
import Bottom from "../components/Common/BottomBar";
import styled from 'styled-components';
import apiCall from '../api';
import { getToken } from "../utils/auth";

const BottomStyle = styled.div`
    position: absolute;
    bottom: 0px;
    width: 430px;
    height: 77px;
    background: #00ABFC;
`;

const ContentContainer = styled.div`
  max-height: 650px;
  padding-bottom:50px;
  overflow-y: auto;

  &::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
`;

const DiaryMain = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = getToken();
      const response = await apiCall('/api/user/diary', 'get', null, token);
      setData(response.data);
    } catch (error) {
      console.log('Error fetching diary data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head />
      <ContentContainer>
        {data.length > 0 ? (
          data.map(data => (
            <DiaryBox key={data.id} data={data} />
          ))
        ) : (
          <EmptyMent />
        )}
        <Plus />
      </ContentContainer>
      <BottomStyle>
        <Bottom />
      </BottomStyle>
    </>
  );
};

export default DiaryMain;
