import HTTP from '../base/BaseService';

class AuthService {
    constructor() {
        this.setAxiosDefaultAuthorizationHeader();
    }
    async register(user) {
        const response = await HTTP.post('/auth/register', user);
        window.localStorage.setItem('token', response.data.token);
        this.setAxiosDefaultAuthorizationHeader()
        return response.data;
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