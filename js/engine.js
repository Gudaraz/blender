var blenderStatus = "off";
var blender = document.getElementById("blender");
var blenderSound = document.getElementById("blender-sound");
var blenderButton = document.getElementById("blender-button-sound"); // Corrected ID

function blenderControl() {
    if (blenderStatus == "off") {
        blenderStatus = "on";
        makeNoise();
        blender.classList.add("active");
    } else {
        blenderStatus = "off";
        makeNoise();
        blender.classList.remove("active");
    }
}

function makeNoise() {
    if (blenderSound.paused) {
        blenderButton.play();
        blenderSound.play();
    } else {
        blenderButton.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}