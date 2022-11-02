import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID gTjAEsaVmDZNXvtLZLYXS2wT1G5jmq1AJjD5PVUc1SU'
    }
});