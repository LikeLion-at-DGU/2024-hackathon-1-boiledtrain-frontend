import React from "react";
import * as S from "./style";
import apiCall from "../../api";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/auth";

const MenuList = ({ courseId, onCourseDeleted }) => {
    const navigate = useNavigate();

    const deleteCourse = async () => {
        try {
            const token = getToken();
            await apiCall(`/api/user/diary/${courseId}`, 'delete', {}, token);
            alert("삭제를 성공했어요 ^ㅅ^");
            navigate('/diarymain');
            onCourseDeleted();
        } catch (error) {
            console.error("삭제를 실패했어요!", error);
            alert('삭제를 실패했어요 ^ㅠ^');
        }
    };

    const editCourse = () => {
        navigate(`/course/${courseId}/edit`);
    };

    return (
        <S.MenuContainer>
            <S.MenuButton style={{ marginTop: '8px' }} onClick={editCourse}>수정하기</S.MenuButton>
            <S.Hr />
            <S.MenuButton2 onClick={deleteCourse}>삭제하기</S.MenuButton2>
        </S.MenuContainer>
    );
};

export default MenuList;
