// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const synth = window.speechSynthesis;
    const voiceSelect = document.getElementById("voice-select");
    const speakButton = document.querySelector("button");
    const textToSpeech = document.getElementById("text-to-speak");
    const faceImage = document.querySelector("#explore img");
    let voices = [];

    function populateVoiceList() {
        voices = synth.getVoices();

        for (let i = 0; i < voices.length; i++) {
            const option = document.createElement("option");
            option.textContent = `${voices[i].name} (${voices[i].lang})`;

            if (voices[i].default) {
                option.textContent += " — DEFAULT";
            }

            option.setAttribute("data-lang", voices[i].lang);
            option.setAttribute("data-name", voices[i].name);
            voiceSelect.appendChild(option);
        }
    }

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    speakButton.addEventListener("click", () => {
        const utterThis = new SpeechSynthesisUtterance(textToSpeech.value); 
        const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
                break;
            }
        }

        const originalFace = faceImage.src;
        faceImage.src = "assets/images/smiling-open.png"; 

        utterThis.onend = () => {
            faceImage.src = originalFace;
        };

        synth.speak(utterThis);
    });
}
