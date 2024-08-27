const codes= document.querySelectorAll('.Code')
codes[0].focus()
codes.forEach((Code,idx) =>{
    Code.addEventListener('keydown', (e) =>{
        if(e.key >=0 && e.key <=9){
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})
///////////////////////////
const registerForm = document.querySelector('.Sign');
registerForm.addEventListener('click', (event) => {
  event.preventDefault();
var keyvalue=codes[0].value;
  for (let index = 1; index < 6; index++) {
    keyvalue+=codes[index].value;
  }
    const data = {
      code:keyvalue,
    };
    fetch('http://127.0.0.1:8000/api/checkcode/email', {
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
      if (data==200) {
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
});