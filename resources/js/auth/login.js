const email = document.querySelector('#email');
const password = document.querySelector('#password');

document.querySelector('#login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    axios.post('/v1/auth/login', { email: email.value, password: password.value })
        .then(() => {
            location.href = '/v1/users'
        })
        .catch(() => {
            alert('User name or password wrong')
        })
})