export const getToken = () => {
    return localStorage.getItem('access_token');
};

export const getUserInfo = () => {
    const userInfo = localStorage.getItem('user_info');
    return userInfo ? JSON.parse(userInfo) : null;
};
