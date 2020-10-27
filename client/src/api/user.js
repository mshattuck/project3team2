import axios from 'axios';

export function getUser(id) {
    return axios.get(`http://localhost:3000/user/5f98ad36b2d92072a57c9837`);
}