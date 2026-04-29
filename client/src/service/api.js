import axios from 'axios';

const URL = 'http://localhost:4000';

export const authenticateSignUp = async (data) => {
    try {
        const response = await axios.post(`${URL}/signup`, data);
        return response.data;
    } catch (error) {
        return  error.response.data;
    }
};


export const Login=async(data)=>{
    try {
        const response = await axios.post(`${URL}/login`,data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}