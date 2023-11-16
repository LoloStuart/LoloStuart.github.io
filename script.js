// Help from https://www.youtube.com/watch?v=UDIfuvLEkjU

const button = document.querySelector('.jokeBox button');
const jokeText = document.querySelector('.jokeBox p');


button.addEventListener('click', fetchJoke);

async function fetchJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json', 
            "User-Agent": "LoloStuarts Library"
        }
    });
const jokeObj = await jokeData.json();
jokeText.innerHTML = jokeObj.joke;
}

// function hover() {
//     let btn= document.querySelector('.projects-btn')
//     btn.classList.add ('hover')
//     console.log(hover);
// }
