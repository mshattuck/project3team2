import axios from 'axios';

export function getUser(id) {
    return axios.get(`http://localhost:8080/api/user/${id}`);
}

export function getBooks(userId) {
    return axios.get(`http://localhost:8080/api/books/user/${userId}`);
}

export function getAllBooks(){
    return axios.get("http://localhost:8080/api/books");
}

