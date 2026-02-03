//===================
//Movie Hub
//====================

//Flow
//Importing DOTENV
import 'dotenv/config';

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


//Variables for API Key and BASE URL form env file
const apikey = process.env.OMDb_API;
const baseurl = process.env.BASE_URL;

// (2) A Function that handles searches
async function searchOMDb(url) {
    // Search  DB api endpoint in URL param
}
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
