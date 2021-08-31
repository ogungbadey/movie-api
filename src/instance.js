import axios from "axios";

const access_token ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWQ5YWNiMzRmYmM5NzMzYTEwYjNlM2E4NjE4YjdkYiIsInN1YiI6IjYxMjE1ZDI5ZDk2YzNjMDA1ZGJkMWVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.frYwVLRusIkDQOYybkKc9eY00vEkwvriDdIFYcJnYgE";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
    headers: {
      Authorization: "Bearer " + access_token,
    },
})

export default instance