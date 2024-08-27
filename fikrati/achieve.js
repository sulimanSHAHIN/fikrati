
console.log("working");

function achive() {
    
const token=localStorage.getItem('token');

    const data = {
        token
    };
    fetch('http://127.0.0.1:8000/api/Archives', {
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
      console.log(data);
    if (data.length>0) {
    for (let index = 0; index < data.length; index++) {

        const outerDiv = document.createElement('div');
        outerDiv.classList.add('One-achieve', 'd-flex');
        
        // Create the inner div element with class "Achieve-course-logo"
        const innerDiv1 = document.createElement('div');
        innerDiv1.classList.add('Achieve-course-logo');
        
        // Create the inner div element with class "Course-logo"
        const innerDiv2 = document.createElement('div');
        innerDiv2.classList.add('Course-logo');
        innerDiv2.style.cssText=`background-image:url(${data[0].course.image})`;        
        // Append the inner div element with class "Course-logo" to the inner div element with class "Achieve-course-logo"
        innerDiv1.appendChild(innerDiv2);
        
        // Create the inner div element with class "Achieve-course-data"
        const innerDiv3 = document.createElement('div');
        innerDiv3.classList.add('Achieve-course-data');
        
        // Create the inner div element with class "Achieve-nameNnom" and "d-flex"
        const innerDiv4 = document.createElement('div');
        innerDiv4.classList.add('Achieve-nameNnom', 'd-flex');
        
        // Create the inner div element with class "Achieve-name" and set its text content to "Adobe XD"
        const innerDiv8 = document.createElement('div');
        innerDiv8.classList.add('Achieve-name');
        innerDiv8.textContent = data[index].course.name;
        
        // Append the inner div elements with class "Achieve-nomber" and "Achieve-name" to the inner div element with class "Achieve-nameNnom"
        innerDiv4.appendChild(innerDiv8);
        
        // Create the inner div element with class "Achieve-percent"
        const innerDiv9 = document.createElement('div');
        innerDiv9.classList.add('Achieve-percent');
        
        // Create the inner div element with class "Achieve-total"
        const innerDiv10 = document.createElement('div');
        innerDiv10.classList.add('Achieve-total');
        
        // Create the inner div element with class "Achieve-done"
        const innerDiv11 = document.createElement('div');
        innerDiv11.classList.add('Achieve-done');
        innerDiv11.style.width=data[index].rate;
        // Append the inner div elements with class "Achieve-total" and "Achieve-done" to the inner div element with class "Achieve-percent"
        innerDiv9.appendChild(innerDiv10);
        innerDiv9.appendChild(innerDiv11);
        
        // Append the inner div elements to the outer div element
        innerDiv3.appendChild(innerDiv4);
        innerDiv3.appendChild(innerDiv9);
        outerDiv.appendChild(innerDiv1);
        outerDiv.appendChild(innerDiv3);
        document.querySelector(".Achieve-container").appendChild(outerDiv);
        }
    }
    else {
        
        const divElement = document.createElement('div');
divElement.classList.add('No-sign');
divElement.textContent = 'لم تقم بإضافة أي إنجاز';
document.querySelector(".Achieve-container").appendChild(divElement);

        // Handle any errors that occur during the API request

    }
})
.catch(error => {
    console.error(error);
    // Handle any errors that occur during the API request
});
}


window.onload=achive;