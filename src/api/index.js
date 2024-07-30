// src/api.js
import axios from 'axios';

// Axios 인스턴스 생성
export const API = axios.create({
    baseURL: 'http://3.36.243.22/'
    // baseURL:'https://0de0-210-94-220-228.ngrok-free.app'
});

// API 호출 함수
const apiCall = async (url, method = 'get', data = {}, token = null) => {
    try {
        const headers = {};

        // 인증이 필요한 경우 헤더에 토큰 추가
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        // 요청 설정 객체 생성
        const config = {
            url,
            method,
            headers,
        };

        // GET 메서드일 경우, 데이터는 쿼리 파라미터로 설정
        if (method.toLowerCase() === 'get') {
            config.params = data;
        } else {
            // POST, PUT, DELETE 등의 메서드에서는 데이터가 요청 본문에 포함됨
            config.data = data;
        }

        // 요청 보내기
        const response = await API(config);

        return response;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};

export default apiCall;
