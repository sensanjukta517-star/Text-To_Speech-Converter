const micBtn = document.querySelector(".micBtn");
const text = document.querySelector(".text");
const clearBtn = document.querySelector(".clearBtn");
const langague = document.querySelector(".langague");

let speech = new SpeechSynthesisUtterance();
let voice =[];

window.speechSynthesis.onvoiceschanged = () => {
    voice = window.speechSynthesis.getVoices();
    speech.voice = voice[0];

    voice.forEach(
        (voice, i) => (langague.options[i] = new Option(voice.name, i)),
    );
}

langague.addEventListener("change", () => {
    speech.voice = voice[langague.value];
})

micBtn.addEventListener("click", () => {
    speech.text = text.value;
    window.speechSynthesis.speak(speech);
})

clearBtn.addEventListener("click", () => {
    text.value = "";
})

// micBtn.addEventListener("click", () => {
//     const speech = new SpeechSynthesisUtterance(text.value);
    
//     speech.lang = "en-INDIA";
//     speech.rate = 1;
//     speech.pitch = 1;

//     window.speechSynthesis.speak(speech);
// })

// clearBtn.addEventListener("click", () => {
//     text.value = "";
// })

