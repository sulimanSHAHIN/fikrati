let StartButton1=document.querySelector(".Start-button1");
let editing=document.querySelector(".Editing-password");
StartButton1.onclick=function(){
editing.style.display="block";
}
console.log(localStorage.getItem("certificate_holder"));
document.querySelector(".User-name").value=localStorage.getItem("certificate_holder");
document.querySelector(".Number").value=localStorage.getItem("number");

/////////////
const registerForm = document.querySelector('#Holder');

registerForm.addEventListener('click', (event) => {

event.preventDefault();
const certificate_holder = document.querySelector('.User-name').value;
const phone_number= document.querySelector('.Number').value;
const token=localStorage.getItem('token');
    const data = {
        phone_number,
    token
    };
    //to number
    fetch('http://127.0.0.1:8000/api/updatephon', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "Accept":'application/json',
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the API
    if (data=='The number has been changed successfully') {
              // Save the token in local storage
        localStorage.setItem('number', phone_number); 
        alert("تم تغيير الرقم بنجاح") ;
    } else {
        // Handle any errors that occur during the API request
        alert(data.message);
    }
    })
    .catch(error => {
    console.error(error);
      // Handle any errors that occur during the API request
    });
    // to number
    const data1 = {
        certificate_holder,
        token
        };
    fetch('http://127.0.0.1:8000/api/UpdateCertificateHolder', {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json',
            "Accept":'application/json',
        },
        body: JSON.stringify(data1)
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the API
        if (data1.token==token) {
                  // Save the token in local storage
            localStorage.setItem('certificate_holder',certificate_holder);  
        alert("تم تغيير اسم الحاصل على الشهادة") ;

        } else {
            // Handle any errors that occur during the API request
            alert(data1.message);
        }
    })
    .catch(error => {
    console.error(error);
      // Handle any errors that occur during the API request
    });
}
);

//password
function newpass() {
    const password = document.querySelector('.New-pass').value;
    const confpassword = document.querySelector('.Conf-pass').value;
    const token=localStorage.getItem('token');
    if(password!=confpassword){
        alert("Invalid password");
      }
      else if (password.length<7) {
        alert("password must have 8 letter at least"); 
      }
      else{        
    const data = {
    password,
    token
    };
    fetch('http://127.0.0.1:8000/api/updatepassword', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "Accept":'application/json',
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {

      // Handle the response from the API
    if (data=="Password changed successfully") {
              // Save the token in local storage
        // Redirect the user to the next page
       alert("Password changed successfully");
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
    };
//
const editpass = document.querySelector('#Holder1');

editpass.addEventListener('click', (event) => {

event.preventDefault();
const password= document.querySelector('.Old-pass').value;
const token=localStorage.getItem('token');

    const data = {
    password,
    token
    };
    fetch('http://127.0.0.1:8000/api/oldepassword', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "Accept":'application/json',
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {

      // Handle the response from the API
    if (data.message=="password is true") {
              // Save the token in local storage
        // Redirect the user to the next page
        newpass();
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

