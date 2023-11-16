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

// function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "lauren.prueter@gmail.com",
//         Password: "password",
//         To: 'lauren.prueter@gmail.com',
//         From: document.getElementById("email").value,
//         Subject: "New message from website",
//         Body: "Name: " + document.getElementById("name").value
//         + "<br> Email: " + document.getElementById("email").value
//         + "<br> Message: " + document.getElementById("message").value
//     }).then(
//         message => alert("Message sent. Thank you.")
//     );
// }