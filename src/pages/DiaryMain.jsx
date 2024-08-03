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
  position: fixed;
  bottom: 0px;
  transform: translateX(0px);
`;

const DiaryMain = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = getToken();
      const response = await apiCall('/user/diary', 'get', null, token);
      console.log(response.data);
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
      {data.length > 0 ? (
        data.map(data => (
          <DiaryBox key={data.id} data={data} />
        ))
      ) : (
        <EmptyMent />
      )}
      <Plus />
      <BottomStyle>
        <Bottom />
      </BottomStyle>
    </>
  );
};

export default DiaryMain;