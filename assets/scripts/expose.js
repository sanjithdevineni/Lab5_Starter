// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.getElementById("horn-select");
    const image = document.querySelector("#expose img");
    const audio = document.querySelector("#expose audio");

    const volumeControl = document.getElementById("volume");
    const volumeIcon = document.querySelector("#volume-controls img");

    const playButton = document.querySelector("button");
    const jsConfetti = new JSConfetti();

    hornSelect.addEventListener("change", (event) => {
        const selectedHorn = event.target.value;

        switch (selectedHorn) {
            case "air-horn":
                image.src = "assets/images/air-horn.svg";
                image.alt = "Air Horn";
                audio.src = "assets/audio/air-horn.mp3";
                break;
            case "car-horn":
                image.src = "assets/images/car-horn.svg";
                image.alt = "Car Horn";
                audio.src = "assets/audio/car-horn.mp3";
                break;
            case "party-horn":
                image.src = "assets/images/party-horn.svg";
                image.alt = "Party Horn";
                audio.src = "assets/audio/party-horn.mp3";
                break;
            default:
                image.src = "assets/images/no-image.png";
                image.alt = "No image selected";
                audio.src = "";
        }
    });

    volumeControl.addEventListener("input", (event) => {
        const volumeValue = event.target.value;
        const audioVolume = volumeValue / 100; 
        audio.volume = audioVolume; 

        if (volumeValue == 0) {
            volumeIcon.src = "assets/icons/volume-level-0.svg"; 
        } else if (volumeValue < 33) {
            volumeIcon.src = "assets/icons/volume-level-1.svg"; 
        } else if (volumeValue < 67) {
            volumeIcon.src = "assets/icons/volume-level-2.svg"; 
        } else {
            volumeIcon.src = "assets/icons/volume-level-3.svg"; 
        }
    });


    playButton.addEventListener("click", () => {
        audio.play();

        if (hornSelect.value === "party-horn") {
            jsConfetti.addConfetti();
        }
    });
}
