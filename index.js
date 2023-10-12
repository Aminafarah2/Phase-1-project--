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

// Event listeners
fetchButton.addEventListener("click", fetchRandomDogImage);



dogImage.addEventListener("load", () => {
    // Adjust the container's size when the image loads
    document.getElementById("container").style.width = dogImage.width + "px";
    document.getElementById("container").style.height = dogImage.height + "px";
});
// load error when the page doesnt load as an event listener 
dogImage.addEventListener("error", () => {
    alert("Failed to load dog image.");
});

