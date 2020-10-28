import axios from 'axios';

export function getUser(id) {
    return axios.get(`http://localhost:8080/routes/api/user/${id}`);
}