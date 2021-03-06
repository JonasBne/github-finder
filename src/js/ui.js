// Create user interface class
export default class Ui {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    // Show user profile
    showUserProfile(user) {
        this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3 d-flex flex-column">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
    `;
    }

    // Show alert
    showAlert(msg, className) {
        // Clear any remaining alerts
        this.clearAlert();
        // Create div & add class
        const div = document.createElement("div");
        div.className = className;

        // Add text node & pass in the message
        div.appendChild(document.createTextNode(msg));

        // Get parent
        const container = document.querySelector(".searchContainer");

        // Get search box
        const search = document.querySelector(".search");

        // Insert alert
        container.insertBefore(div, search);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        // If there is an alert, first clear it
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear profile
    clearUserProfile() {
        this.profile.innerHTML = "";
    }
}