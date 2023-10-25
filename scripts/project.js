//import functions from other files.
import {inspirationQuote} from "./inspirationquote.js";
import { animequote } from "./animeQuote.js";
import { ronswansonquote } from "./ronswanzonquote.js";

//Where the javascript outputs would appear in the html
const quoteText = document.querySelector(".quote")
let authorName = document.querySelector(".name")

// Create the buttons
let inspirationalbutton = document.querySelector(".inspirational");
const animebutton = document.querySelector(".anime");
const ronswansonbutton = document.querySelector(".ronswanson");
const savequotebutton = document.querySelector("savequote")

// Event listeners for the buttons
inspirationalbutton.addEventListener("click", inspirationQuote);
animebutton.addEventListener("click", animequote);
ronswansonbutton.addEventListener("click", ronswansonquote);



