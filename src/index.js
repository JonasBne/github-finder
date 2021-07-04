// Import Bootstrap & Bootswatch
import "bootstrap";
import "bootswatch/dist/flatly/bootstrap.css";

// Import custom css
import "./css/custom.scss";

// Import class(es) & initialize
import Github from "./js/github";
const github = new Github;

import Ui from "./js/ui";
const ui = new Ui();

// Search input
const searchUser = document.getElementById("search-user");

// Event listener search input
searchUser.addEventListener("input", () => {
    // Get input text
    const userText = searchUser.value;

    // Validate input
    if (userText !== "") {
        // Make HTTP call and pass in user profile
        github.fetchUserProfile(userText)
            .then(data => {
                // Check if there is a 404 error
                if (data.profile.message === "Not Found") {
                    // Show alert
                    ui.showAlert(`User ${userText} not found`, "alert alert-danger");
                } else {
                    // Show profile
                    ui.showUserProfile(data.profile);
                }
            });
    } else {
        // Clear profile
        ui.clearUserProfile();
    }

})
