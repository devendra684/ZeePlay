import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/4",
});

export default instance;