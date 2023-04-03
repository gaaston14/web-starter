console.log('Hola Mundo');

window.addEventListener('load', () => {
    const submitButton = document.querySelector('#submit');
    submitButton?.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#error').classList.remove('show-error');
        document.querySelector('#ok').classList.remove('show-ok');
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const message = document.querySelector('#message').value;
        if (name !== '' && email !== '' && message !== '') {
            // ok
            document.querySelector('#user-name').innerHTML = name;
            document.querySelector('#user-email').innerHTML = email;
            document.querySelector('#user-telefono').innerHTML = telefono;
            document.querySelector('#user-message').innerHTML = message;
            document.querySelector('#ok').classList.add('show-ok');
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#telefono').value = '';
            message = document.querySelector('#message').value = '';
        } else {
            // error
            document.querySelector('#user-name').innerHTML = '';
            document.querySelector('#user-email').innerHTML = '';
            document.querySelector('#user-telefono').innerHTML = '';
            document.querySelector('#user-message').innerHTML = '';
            document.querySelector('#error').classList.add('show-error');
        }
    });

    document.querySelector('#get-user')?.addEventListener('click', getUser);
});

function getUser() {
    fetch('https://randomuser.me/api/')
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            document.querySelector('#no-user').classList.remove('show-error');
            const userData = response.results[0].name;
            document.querySelector('#user-name').innerHTML = `${userData.title}. ${userData.first} ${userData.last}`;
        })
        .catch((error) => {
            console.log('aja', error);
            document.querySelector('#user-name').innerHTML = '';
            document.querySelector('#no-user').classList.add('show-error');
    });
}