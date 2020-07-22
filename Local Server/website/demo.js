let baseURl = '';
let apiKey = '';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    
const newAnimal = document.getElementById('animal').value;
const desc = document.getElementById('desc').value;
const fav = document.getElementById('fav').value;
    getAnimalDemo(newAnimal).then(
        function(data){
            console.log(data);
            postData('/add', {animal: newAnimal, desc: desc, fav: fav});
        }
    ).then(
        updateUI()
    )
}

const getAnimalDemo = async (animal) => {
    console.log("running GET for form");
    const response = await fetch('/fakeAnimalData');
    try {
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log("error", error);
    }
}

const postData = async (url = '', data = {}) => {
    //console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
  
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
  }

  // postData('/add', {movie: 'Thrones', score: 4});
// postData('/add', {movie: 'Kingdoms', score: 3});

const updateUI = async () => {
    const response = await fetch('/fakeAnimal');
    try {
        const data = await response.json();
        document.getElementById('animalName').innerHTML = data.animal;

    } catch (error) {
        console.log("error", error);
    }
}

