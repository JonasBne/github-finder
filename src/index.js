// Import Bootstrap & Bootswatch
import "bootstrap";
import "bootswatch/dist/litera/bootstrap.min.css";

// Import custom css
import "./css/custom.scss";

// Import class(es) & initialize
import Github from "./js/github";

const github = new Github;

// Search input
const searchUser = document.getElementById("search-user");

// Event listener search input
searchUser.addEventListener("keydown", () => {
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
                    alert("User does not exist");
                } else {
                    // Show profile
                }
            });
    } else {
        // Clear profile
    }

})
