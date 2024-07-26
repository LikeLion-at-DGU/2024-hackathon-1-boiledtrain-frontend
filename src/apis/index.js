import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://3.36.243.22:8000',
    headers: {
        
    }
});

export default API