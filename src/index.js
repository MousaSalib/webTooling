import generateJoke from "./generateJoke";
import "./style/main.scss";
import laugh from './assets/istockphoto-1124532572-612x612.jpg';
const laughImg = document.getElementById("laughImg");
laughImg.src = laugh;
laughImg.style.width = "100px";
laughImg.style.height = "100px"
const jokeBtn = document.getElementById("jokeBtn");
jokeBtn,addEventListener("click", generateJoke)
// console.log(generateJoke());
