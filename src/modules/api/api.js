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

    async getRecent() {
        const response = await this.getEndpoint(`/posts/recent`);
        if (response.status !== 200)
            return null;
        return response.json();
    }

    async getNearest(lat, long, radius = 5000) {
        const response = await this.getEndpoint(`/posts/near?lat=${lat}&lon=${long}&radius=${radius}`);
        if (response.status !== 200)
            return null;
        return response.json();
    }

    async getNearestDistance(lat, long, radius = 5000) {
        const response = await this.getEndpoint(`/posts/near/dist?lat=${lat}&lon=${long}&radius=${radius}`);
        if (response.status !== 200)
            return null;
        return response.json();
    }

    async getFeatured(upvotes) {
        const response = await this.getEndpoint(`/posts/featured?upvotes=${upvotes}`);
        if (response.status !== 200)
            return null;
        return response.json();
    }

    async getFeaturedUpvotes(upvotes) {
        const response = await this.getEndpoint(`/posts/featured/upvotes?upvotes=${upvotes}`);
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
        const response = await this.postEndpoint("/posts/create", post);
        if (response.status !== 200)
            return null;
        return parseInt(await response.text());
    }

    async uploadImage(postId, file) {
        let data = new FormData();
        data.append("file", file);

        const response = await fetch(`${this.apiUrl}/posts/${postId}/image`, {
            method: "POST",
            body: data,
        });
        return response.status === 200;
    }

    async likePost(postId) {
        const response = await this.postEndpoint(`/posts/${postId}/like`);
        if (response.status !== 200)
            return null;
        return response.json();
    }
}

const Api = new ApiController("/api/v1");
export default Api;
