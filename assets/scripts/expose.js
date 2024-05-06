// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.getElementById("horn-select");
    const image = document.querySelector("#expose img");
    const audio = document.querySelector("#expose audio");

    const playButton = document.querySelector("button");
    const volumeControl = document.getElementById("volume");
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

    playButton.addEventListener("click", () => {
        audio.volume = volumeControl.value / 100; 

        audio.play();

        if (hornSelect.value === "party-horn") {
            jsConfetti.addConfetti(); 
        }
    });
}
