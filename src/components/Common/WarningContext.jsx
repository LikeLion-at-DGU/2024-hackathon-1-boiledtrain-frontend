import React, { createContext, useContext, useState } from 'react';

const WarningContext = createContext();

export const useWarning = () => useContext(WarningContext);

export const WarningProvider = ({ children }) => {
    const [warning, setWarning] = useState({ message: '', show: false });

    const showWarning = (message) => {
        setWarning({ message, show: true });
    };

    const hideWarning = () => {
        setWarning({ message: '', show: false });
    };

    return (
        <WarningContext.Provider value={{ warning, showWarning, hideWarning }}>
            {children}
        </WarningContext.Provider>
    );
};
