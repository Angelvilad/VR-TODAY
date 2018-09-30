class APIService {
    constructor(){
        this.baseUrl = process.env.API_URL;
    }
    async get(uri) {
        try {
            const response = await fetch(`${this.baseUrl}${uri}`);
            if (!response.ok) {
                throw Error(response.statusText);
            } 
            return response.json();
        } catch (error) {
            return { error };
        }
    }  
}

export default APIService;