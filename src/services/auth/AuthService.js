import HTTP from '../base/BaseService';

class AuthService {
    constructor() {
        this.setAxiosDefaultAuthorizationHeader();
    }
    async register(user) {
        const response = await HTTP.post('/auth/register', user);
        window.localStorage.setItem('token', response.data.access_token);
        this.setAxiosDefaultAuthorizationHeader()
    }
    login({email, password}) {

        return HTTP.post('/auth/login', { email, password }).then(response => {
            window.localStorage.setItem('token', response.data.access_token);
            this.setAxiosDefaultAuthorizationHeader();
        });
    }
    setAxiosDefaultAuthorizationHeader() {
        const TOKEN = window.localStorage.getItem('token');
        if (!TOKEN) {
            return;
        }
        HTTP.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
    }
    isAuthenticated() {
        return !!window.localStorage.getItem('token');
    }
}
const authService = new AuthService();
export default authService;