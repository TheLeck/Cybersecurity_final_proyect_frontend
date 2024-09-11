import axios from 'axios'
const API_URL = 'http://localhost:3000'
export async function login(email, password){
    try {
        const response = await axios.post(`${API_URL}/api/login`, {
            email,
            password
        });
        if (response.data.token) { 
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.id);
        }
        return response.data
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function register(email, password, tokenReCaptcha){
    try {
        const response = await axios.post(`${API_URL}/api/register`, {
            email,
            password,
            tokenReCaptcha
        });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.id);
        }
        return response.data
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function logout(){
    localStorage.removeItem('token');
}

export async function getToken(){
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }
    return token;
}

export async function isAuthenticated(){
    return localStorage.getItem('token')? true : false;
    
}