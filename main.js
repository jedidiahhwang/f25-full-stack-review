console.log("Hello world");

// STEP 1: Grab element
const getButton = document.querySelector("#get-button");
const postInput = document.querySelector("#post-input");
const postButton = document.querySelector("#post-button");

// STEP 2: Write functionality
const baseURL = `http://localhost:4004`

// GET REQUEST
const getPlayer = () => {
    // Send an axios request to OUR server
    axios.get(`${baseURL}/api/get`) // LET'S WAIT
        .then((res) => {
            console.log(res.data);
        })
}

// POST REQUEST
const postPlayer = () => {
    // POST 1: Grab the data from your HTML save it to a variable of a SPECIFIC data type
    const playerObj = {
        // KEY: VALUE pairs
        nbaPlayer: postInput.value // This contains whatever I type in my input
    }

    // POST 2: Send the body to the backend along with your axios request
        // REMEMBER - POST takes two arguments
            // First argument - URL
            // Second argument- body
    axios.post(`${baseURL}/api/post`, playerObj) 
        // --> Going to the back end now!
        // Let's chill until we get our response back
        .then((res) => {
            console.log(res.data);
        })
}

// STEP 3: Combine using addEventListener
// DO NOT INVOKE YOUR CALLBACK HERE AKA NO PARENTHESES
getButton.addEventListener("click", getPlayer);
postButton.addEventListener("click", postPlayer);