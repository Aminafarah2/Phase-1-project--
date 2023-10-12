const dogImage = document.getElementById("dogImage");
const fetchButton = document.getElementById("btn");

// Function to fetch a random dog image
function fetchRandomDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            if (data.status === "success") {
                // Set the image source to the fetched dog image URL
                dogImage.src = data.message;
            } else {
                alert("Failed to fetch dog image.");
            }
        })
        .catch((error) => {
            console.error("Error fetching dog image:", error);
        });
}
fetchRandomDogImage();