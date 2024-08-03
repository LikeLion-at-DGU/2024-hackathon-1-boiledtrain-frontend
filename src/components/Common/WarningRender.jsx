import React from 'react';
import { useWarning } from './WarningContext';
import WarningChoose from './WarningChoose';

const WarningRenderer = () => {
    const { warning, hideWarning } = useWarning();
    const handleLogin = () => {
        hideWarning();
        navigate('/login');
    };

    if (!warning.show) return null;

    return <WarningChoose message={warning.message} onClose={hideWarning} onLogin={handleLogin} />;
};

export default WarningRenderer;
