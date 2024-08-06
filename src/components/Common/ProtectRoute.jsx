import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useWarning } from './WarningContext';

const ProtectedRoute = ({ element, excludePaths = [] }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { showWarning } = useWarning();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token && !excludePaths.includes(location.pathname)) {
            showWarning("로그인 후 이용 가능합니다.");
            navigate(-1);
        }
    }, [navigate, showWarning, location.pathname, excludePaths]);

    return element;
};

export default ProtectedRoute;
