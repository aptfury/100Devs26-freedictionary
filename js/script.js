// Function Set Up
document.querySelector('#srchBtn').addEventListener('click', findWord);

function findWord() {
    // Fetch Search Term
    let srch = document.querySelector('#srchBar').value;

    // Link to API
    let dictionaryURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${srch}`;

    // Fetch DOM Locations
    const theWord = document.querySelector('#wordOfDay');
    const thePronunciation = document.querySelector('#pronunciationOfDay');
    const theDefinition = document.querySelector('#definitionOfDay');

    // Fetch API
    fetch(dictionaryURL)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data[0]) {
                // Push Word Information to DOM
                theWord.innerText = data[0].word;
                thePronunciation.innerText = data[0].phonetic;
                theDefinition.innerText = data[0].meanings[0].definitions[0].definition;
            } else {
                theWord.innerText = `We couldn\'t find \'${srch}\' in the dictionary`
            }
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        })
}