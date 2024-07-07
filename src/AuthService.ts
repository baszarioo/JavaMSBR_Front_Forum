import axios from 'axios';

interface SignupRequestPayload {
    username: string;
    email: string;
    password: string;
}

const API_URL = 'http://localhost:8080/api/auth/signup';    //placeholder

class AuthService {
    signup(SignupRequestPayload: SignupRequestPayload) {
        return axios.post(API_URL, SignupRequestPayload);
    }
}

export default new AuthService();