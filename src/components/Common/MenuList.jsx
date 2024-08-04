import React from "react";
import * as S from "./style";
import apiCall from "../../api";

const MenuList = ({ courseId, onCourseDeleted, onEditCourse }) => {
    const deleteCourse = async () => {
        try {
            const token = localStorage.getItem('access_token');
            await apiCall(`/api/user/course/${courseId}`, 'delete', { headers: { Authorization: `Bearer ${token}` } });
            onCourseDeleted();
        } catch (error) {
            console.log("삭제 실패", error);
        }
    };

    return (
        <S.MenuContainer>
            <S.MenuButton style={{ marginTop: '8px' }} onClick={onEditCourse}>수정하기</S.MenuButton>
            <S.Hr />
            <S.MenuButton onClick={deleteCourse}>삭제하기</S.MenuButton>
        </S.MenuContainer>
    );
};

export default MenuList;
