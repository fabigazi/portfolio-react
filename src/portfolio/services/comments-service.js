import axios from 'axios';

const API_BASE = 'https://portfolio-node-server-6gmc.onrender.com/api';//'http://localhost:4000/api'; //"https://tuiter-node-server-app-7k6l.onrender.com/api";
const COMMENTS_API = `${API_BASE}/comments`; //'http://localhost:4000/api/tuits';

export const createComment = async (comment) => {
    const response = await axios.post(`${API_BASE}/comment`, comment)
    return response.data;
}

export const findComments = async () => {
    const response = await axios.get(COMMENTS_API);
    const comments = response.data;
    return comments;
}
  