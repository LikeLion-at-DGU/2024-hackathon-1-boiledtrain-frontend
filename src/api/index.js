import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://3.36.243.22',
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyMDExNDYwLCJpYXQiOjE3MjE5ODYyNjAsImp0aSI6IjJlOTQ5Zjk3ZDA5YTQ0NGZhYzljNDU3N2ZiZmFjYjgzIiwidXNlcl9pZCI6M30.d30JRT6ntHcFnzy8XRniy4kQBKkzeCIta2oEFLxi0iM",
    }
});

export default API;