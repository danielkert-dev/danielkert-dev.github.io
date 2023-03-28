const languageText = {
        swedish: {
        title: "FOTOGRAFI, VIDEO, 3D MODELLER, WEBSIDA",
        // other text in Swedish
        },
        english: {
        title: "PHOTOGRAPHY, VIDEO, 3D MODELS, WEBSITES",
        // other text in English
        }
    };


function changeLanguage () { // Change the language
const languageSelector = document.querySelector(".language-selector"); //Select the language list
const titleElement = document.querySelector(".title"); // Select the title

const selectedLanguage = languageSelector.value; // Selected language value

titleElement.innerHTML = languageText[selectedLanguage].title; // Set the value to title

}