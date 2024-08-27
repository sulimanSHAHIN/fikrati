console.log("working");
  const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const name2 = urlParams.get('name');
const skill2 = urlParams.get('skill');
const duration2= urlParams.get('duration');
const price2 = urlParams.get('price');
const image2= urlParams.get('image');
console.log(image2);
// 
document.querySelector(".Name").innerHTML=name2;
document.querySelector(".Hour").innerHTML=duration2;
document.querySelector(".Price").innerHTML=price2;
document.querySelector(".Skill").innerHTML=skill2;
document.querySelector(".Imgcousre").src=image2;
// function cour() {
//   fetch(`http://127.0.0.1:8000/api/getcourse/${id}`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         "Accept":'application/json',
//     },
//     })
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Network response was not ok.');
//   })
//   .then(data => {
    
//     console.log(data);

//   })
//   .catch(error => {
//     // Handle any errors that occurred during the request
//     console.error('Error fetching data:', error);
//   });

// } 
//   window.onload=cour;

  //////////////////////////////////////////////////////
  const Buy = document.querySelector('.Buy');

  Buy.addEventListener('click', (event) => {
    event.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
const token=localStorage.getItem('token');

    const data = {
      token
    };
    fetch(`http://127.0.0.1:8000/api/registcourse/${id}`, {
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
      if(data.message=='true')
    alert('Course registered successfully!');
    })
    .catch(error => {
    console.error(error);
      // Handle any errors that occur during the API request
    });
}
);