console.log("working");
const registerForm = document.querySelector('.Holder');

registerForm.addEventListener('click', (event) => {
  
  event.preventDefault();
  const email = document.querySelector('#Email').value;
  const name = document.querySelector('#User-Name').value;
  const certificateHolder = document.querySelector('#Name').value;
  const phoneNumber = document.querySelector('#Number').value;
  const password = document.querySelector('#Pass').value;
  const confpassword = document.querySelector('#Cpass').value;
  if(password!=confpassword){
    alert("Invalid password");
  }
  else if (password.length<7) {
    alert("password must have 8 letter at least");
    
  }
  else{
    const data = {
      email,
      name,
      certificate_holder: certificateHolder,
      phone_number: phoneNumber,
      password
    };
    fetch('http://127.0.0.1:8000/api/register', {
  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept":'application/json'
      },
      body: JSON.stringify(data)
  
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response from the API
      if (data.message=='code.sent') {
        // Redirect the user to the next page
        window.location.href = 'cheak.html';
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
});