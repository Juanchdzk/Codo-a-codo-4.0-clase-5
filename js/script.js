import Button from "./components/buttons.js";
import Video from "./components/video.js";

//comillas invertidas --> ALT + 96

const miApp = document.getElementById("myApp");

let MyButton = new Button("Presiona el boton", "MyButton");
miApp.innerHTML = MyButton.render();

let MyVideo = new Video(400, 230, "MyVideo", "videoplayback.mp4");
miApp.innerHTML = MyVideo.render();
