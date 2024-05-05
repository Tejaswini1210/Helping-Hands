document.addEventListener("DOMContentLoaded", function () {
    // Get the button and input elements for location search
    var locationButton = document.getElementById("location-button");
var locationPopup = document.getElementById("location-popup");
var closeButton = document.getElementById("close");
var useCurrentLocationButton = document.getElementById("use-current-location");
var enterLocationInput = document.getElementById("enter-location");
var useEnteredLocationButton = document.getElementById("use-entered-location");

locationButton.addEventListener("click", function() {
  locationPopup.style.display = "block";
});

closeButton.addEventListener("click", function() {
  locationPopup.style.display = "none";
});

useCurrentLocationButton.addEventListener("click", function() {
  // Add functionality to get user's current location using geolocation API
  // For example:
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

useEnteredLocationButton.addEventListener("click", function() {
  // Add functionality to use the entered location
  var enteredLocation = enterLocationInput.value;
  //  Process the entered location
  alert("You entered: " + enteredLocation);
});

function showPosition(position) {
  // Get user's latitude and longitude
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  alert("Latitude: " + latitude + " Longitude: " + longitude);
  // You can use these coordinates to process the user's location
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    default:
      alert("An unknown error occurred.");
  }
}

    // Add filtering functionality for services based on user input
    const searchInput = document.getElementById('searchInput');
    const matrixContainers = document.querySelectorAll('.matrix-container');

    // Event listener for input field to filter services dynamically
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        // Iterate over each matrix container
        matrixContainers.forEach(container => {
            const matrixBoxes = container.querySelectorAll('.matrix-box');

            // Iterate over each matrix box and filter based on the service name
            matrixBoxes.forEach(box => {
                const serviceName = box.querySelector('.box-text').textContent.toLowerCase();

                // Show or hide the box based on the search term
                if (serviceName.includes(searchTerm)) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });

    // Get the Home link and matrix boxes for popups
    const homeLink = document.getElementById("homeLink");
    const matrixBoxes = document.querySelectorAll('.matrix-box');

    // Add click event listener to each matrix box to display corresponding popups
    matrixBoxes.forEach(function(box) {
        box.addEventListener('click', function() {
            // Get the ID of the clicked box and corresponding popup
            const boxId = this.getAttribute('id');
            const popupId = 'popup' + boxId.substring(3);

            // Show the corresponding popup and overlay
            document.getElementById(popupId).style.display = 'block';
            document.querySelector('.overlay').style.display = 'block';
        });
    });

    // Scroll to the top of the page when the Home link is clicked
    homeLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        window.scrollTo(0, 0); // Scroll to the top of the page
    });

    // Event listener for the feedback form submission
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Get form data

        // Reset the form and display a success message
        feedbackForm.reset();
        alert('Thank you for your feedback!');
    });

    // Event listener for the login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');

        // Basic validation for demonstration purposes
        if (username === 'example' && password === 'password') {
            alert('Login successful!');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
