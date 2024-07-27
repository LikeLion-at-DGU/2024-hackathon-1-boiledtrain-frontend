// src/api.js
import axios from 'axios';
import Cookies from 'js-cookie';

export const API = axios.create({
    baseURL: 'http://3.36.243.22/',
    headers: {
        // "Authorization": `Bearer ${Cookies.get('kakaoToken') || ''}`,
    }
});

export default API;
