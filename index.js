let target = document.getElementById('target');
let array = ["Bienvenue sur le  site \"Benin's Story\""];
let wordIndex = 0;
let letterIndex = 0;


const createLetter = () => {
    const letter = document.createElement('span')
    target.appendChild(letter);
    letter.textContent = array[wordIndex][letterIndex];
    
}

const loop = () => {
    setTimeout(() => {
        if(letterIndex < array[wordIndex].length){
            createLetter();
            letterIndex++;
            loop();
        }
        else
        {
            wordIndex++;
            letterIndex = 0;
            loop();
            
        }

    },60)
}
loop();

// \u00a0
