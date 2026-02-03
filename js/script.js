//===================
//Movie Hub
//====================

//Flow

// (1) All variables
// Theme Toggle variable
const themeToggle = document.getElementById("themeToggle");

// User Input and button 
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

//Status message and Movie grid 
const statusMessage = document.getElementById("statusMessage");
const movieGrid = document.getElementById("movieGrid");

//Watch list GRID and STATUS message
const watchlistGrid = document.getElementById("watchlistGrid");
const watchlistEmptyMessage = document.getElementById("watchlistEmpty");

//==========================================================================
//==========================================================================
//==========================================================================

//Variables for API Key and BASE URL
const apikey = "16752cf9";
const baseurl = "http://www.omdbapi.com/?apikey=" + apikey;

// (2) A Function that handles searches
// and implements ERROR handling
async function searchOMDb(searchTerm) {
    // Search  OMDb api endpoint in URL param
    const url = `${baseurl}&s=${encodeURIComponent(searchTerm)}`; // build full URL with search term
    try {
        //creating response Var
        //response should wait until condition is met 
        const response = await fetch(url);

        //if response.ok is negative perform throw function == >>
        if (!response.ok) {
            //Throw HTTP ERROR CODE to the console
            throw new Error(`HTTP error: ${response.status}`);
        } 

        //Store response JSON in data VAR
        const data = await response.json();
        
        //return data to console
        return data;
    } catch (error) {
        console.log("Fetch Failed: ", error)
        return null;
    }
}

//==========================================================================
//==========================================================================
//==========================================================================


//Checking to see of Data is Loaded form API OMDb
// const data = await searchOMDb("Batman");
// console.log(data)

//==========================================================================
//==========================================================================
//==========================================================================


//==========================================================================

// (3) A Function that renders the Movie Card
function renderMovieCard() {
    return
}
//==========================================================================

// (4) A Function that renders the Watch list
function renderWatchList() {
    return
}
//==========================================================================

// (5) A Function that Toggles the Theme
function toggleTheme() {
    return
}
//==========================================================================
