import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import WarningChoose from './WarningChoose';

const ProtectedRoute = ({ element }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            setShowWarning(true);
        }
    }, [navigate]);

    const handleLogin = () => {
        navigate('/login', { state: { from: location } });
    };

    const handleCloseWarning = () => {
        setShowWarning(false);
        navigate(-1); // 이전 페이지로 이동
    };

    if (showWarning) {
        return <WarningChoose message="로그인 후 이용 가능합니다." onClose={handleCloseWarning} onLogin={handleLogin} />;
    }

    return element;
};

export default ProtectedRoute;
