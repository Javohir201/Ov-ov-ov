window.addEventListener("keypress", (e) => {
    if (e.code == "KeyB") {
        playB();
    } else if (e.code == "KeyC") {
        playC();
    } else if (e.code == "KeyF") {
        playF();
    } else if (e.code == "KeyE") {
        playE();
    }
 

 })



let playB = () => new Audio("audio/B.mp3").play();
let playC = () => new Audio("audio/C.mp3").play();
let playF = () => new Audio("audio/F.mp3").play();
let playE = () => new Audio("audio/E.mp3").play();
