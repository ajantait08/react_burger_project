import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7ad9f-default-rtdb.firebaseio.com/'
})

export default instance;