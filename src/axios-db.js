import axios from 'axios';

const instance = axios.create({
   baseURL: "https://leasera.firebaseio.com"
});

export default instance;
