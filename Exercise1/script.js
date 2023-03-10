let inputName = document.getElementById('inputName');

function ChangeName() {
    let name = prompt('What your name?');
    if (name === '') {
        alert('Please add your name');
    } else if (!isNaN(name)) {
        alert('Your name cannot be Number');
    } else {
    inputName.innerHTML = 'Hello ' + name;
    console.log(name)
    // inputName.innerHTML = `Hello ${prompt('What your name?')}`
    }
}