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

export function getBookbyID(id) {
    return axios.get(`http://localhost:8080/api/books/${id}`)
}

export function addBookToUser(userID, bookID){
    return axios.post("http://localhost:8080/api/user/addBook");
}

export function getBookofWeek() {
    return axios.get('http://localhost:8080/api/bofw/BookofWeek');
}