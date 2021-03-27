class ApiController {
    constructor(url) {
        this.apiUrl = url;
    }

    async getEndpoint(endpoint) {
        return await fetch(`${this.apiUrl}${endpoint}`);
    }

    async postEndpoint(endpoint, body) {
        return await fetch(`${this.apiUrl}${endpoint}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body),
        });
    }

    async getUserProfile(id) {
        const response = await this.getEndpoint("/user/profile");
        return response.json();
    }

    async login(username, password, rememberMe) {
        const response = await this.postEndpoint(
            "/user/login",
            {username, password, rememberMe});
        return response.status === 200;
    }

    async logout() {
        const response = await this.postEndpoint("/user/logout", {});
        return response.status === 200;
    }

    async signup(username, password) {
        const response = await this.postEndpoint(
            "/user/signup",
            {username, password});
        return response.status === 200;
    }

    async getRecent(count) {
        const response = await this.getEndpoint(`/posts/recent/${count}`);
        if (response.status !== 200)
            return null;
        return response.json();
    }

    async getPost(id) {
        const response = await this.getEndpoint(`/posts/${id}`);
        if (response.status !== 200)
            return null;
        return response.json();
    }

    async createPost(post) {

    }
}

export default ApiController;
