// Create class
export default class Github {
    constructor() {
        // Github Oath
        this.client_id = "0fac1fd45c15916c7e1f";
        this.client_secret = "a2c9dc646c5681beb93c667af4aac92c274221a8";
    }

    // Add method for a GET request
    async fetchUserProfile(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        return {
            profile: profileData
        }
    }

}