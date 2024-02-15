console.log("page loaded...");

var video = document.getElementById("myVideo");

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

// Pausa el video cuando se carga la página
video.pause();
