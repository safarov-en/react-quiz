import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-2159f-default-rtdb.europe-west1.firebasedatabase.app'
})