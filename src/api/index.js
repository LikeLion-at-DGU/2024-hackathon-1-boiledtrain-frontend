// src/index.js
import axios from 'axios';
import { getToken } from "../utils/auth";

// Axios 인스턴스 생성
export const API = axios.create({
    baseURL: 'http://3.36.243.22:8000/'
    // baseURL: 'https://0de0-210-94-220-228.ngrok-free.app'
});

// API 호출 함수
const apiCall = async (url, method = 'get', data = null, token = null) => {
    try {
        const headers = {};
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const config = {
            url,
            method,
            headers,
        };

        if (method.toLowerCase() === 'get') {
            config.params = data; // GET 요청일 때 params에 data를 추가
        } else {
            config.data = data; // POST/PUT 요청일 때 data를 추가
        }

        const response = await API(config);
        console.log(response);
        return response;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};

export default apiCall;