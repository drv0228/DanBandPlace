class BandSiteAPI {
    constructor(apiKey) {
        this.baseURL = 'https://project-1-api.herokuapp.com';
        this.apiKey = apiKey
    }
    async getComment() {
       try {
        const response = await axios.get(`${this.baseURL}/comments?${this.apiKey}`);
        const comment = response.data;
        comment.sort((a,b) => b.timestamp - a.timestamp);
        console.log(comment);
        return comment;
    }
    catch(error){
        console.log(error);
    }
    };

    async postComment(newComment) {
        try {
        const response = await axios.post(`https://project-1-api.herokuapp.com/comments?api_key=e106b022-3c18-4662-af84-1a28ac07b97d`, newComment);
        console.log(response);
        
        } 
        catch (error) {
              console.log(error);  
        }
};

async getShows() {
    try {
     const response = await axios.get(`${this.baseURL}/showdates?${this.apiKey}`);
     const comment = response.data;
     console.log(comment);
     return comment;
 }
 catch(error){
     console.log(error);
 }
 };
}
