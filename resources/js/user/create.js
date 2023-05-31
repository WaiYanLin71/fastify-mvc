


const form = document.querySelector('#create-user');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorMessages = document.querySelectorAll('.error-message')

const clearErrorMessage = () => {
  errorMessages.forEach((el) => {
    el.innerText = '';
  })
}

form.addEventListener('submit', function (e) {
  clearErrorMessage();
  e.preventDefault();
  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
  }
  axios.post('/v1/users', data)
    .then(res => {
      location.href = `/v1/users`
    }).catch(error => {
      console.log(error)
      if (error.response.status === 422) {
        error.response.data.messages.forEach(function (item) {
          const [key, value] = Object.entries(item)[0]
          document.querySelector(`#error-${key}`).innerText = value;
        })
      }
    })
})