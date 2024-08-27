//this is for index1.html
console.log("working");

const registerForm = document.querySelector('.Holder');

registerForm.addEventListener('click', (event) => {

event.preventDefault();
const email = document.querySelector('#Email').value;
const password = document.querySelector('#Pass').value;

    const data = {
    email,
    password
    };
    fetch('http://127.0.0.1:8000/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "Accept":'application/json',
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
      // Handle the response from the API
    if (data.status=="success") {
              // Save the token in local storage
      localStorage.setItem('token', data.authorisation.token);
      localStorage.setItem('email', data.user.email);
      localStorage.setItem('number', data.user.phone_number);
      localStorage.setItem('name', data.user.name);
      localStorage.setItem('certificate_holder', data.user.certificate_holder);


        // Redirect the user to the next page
        window.location.href = 'index.html';
    } else {
        // Handle any errors that occur during the API request
        alert(data.message);
    }
    })
    .catch(error => {
    console.error(error);
      // Handle any errors that occur during the API request
    });
}
);