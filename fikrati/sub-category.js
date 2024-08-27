function pd() {
   const urlParams = new URLSearchParams(window.location.search);
   const id = urlParams.get('id');
console.log(id);
fetch(`http://127.0.0.1:8000/api/getcourse/${id}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    // Do something with the response data
    console.log(data);
        for (var i=0;i<=data.length;i++)
{
// Create the outer div element with class "One-Sub-category"
const outerDivElement = document.createElement('div');
outerDivElement.classList.add('One-Sub-category');
outerDivElement.setAttribute('data-id', data[i].id); // Set the data-id attribute to the id value
outerDivElement.setAttribute('data-name', data[i].name); // Set the data-id attribute to the id value
outerDivElement.setAttribute('data-skill', data[i].skill); // Set the data-id attribute to the id value
outerDivElement.setAttribute('data-duration', data[i].duration); // Set the data-id attribute to the id value
outerDivElement.setAttribute('data-image', data[i].image); // Set the data-id attribute to the id value
outerDivElement.setAttribute('data-price', data[i].price); // Set the data-id attribute to the id value

// Create the inner div element with class "Sub-category-img" and its child img element
const innerDivElement = document.createElement('div');
innerDivElement.classList.add('Sub-category-img');
const imgElement = document.createElement('img');
imgElement.src = data[i].image;
imgElement.alt = '';
imgElement.srcset = '';
imgElement.classList.add('Sub-category-img1');
innerDivElement.appendChild(imgElement);

// Create the inner div element with class "Sub-category-name"
const innerDivElement2 = document.createElement('div');
innerDivElement2.classList.add('Sub-category-name');
innerDivElement2.textContent = data[i].name;

// Append the inner div elements to the outer div element
outerDivElement.appendChild(innerDivElement);
outerDivElement.appendChild(innerDivElement2);
outerDivElement.addEventListener('click', (event) => {
  const id1 = event.currentTarget.getAttribute('data-id'); // Get the id value from the clicked element
  const name1 = event.currentTarget.getAttribute('data-name'); // Get the id value from the clicked element
  const skill1 = event.currentTarget.getAttribute('data-skill'); // Get the id value from the clicked element
  const image1 = event.currentTarget.getAttribute('data-image'); // Get the id value from the clicked element
  const price1 = event.currentTarget.getAttribute('data-price'); // Get the id value from the clicked element
  const duration1= event.currentTarget.getAttribute('data-duration'); // Get the id value from the clicked element
  const url = `course.html?name=${encodeURIComponent(name1)}&price=${encodeURIComponent(price1)}&id=${encodeURIComponent(id1)}&image=${encodeURIComponent(image1)}&duration=${encodeURIComponent(duration1)}&skill=${encodeURIComponent(skill1)}`;

  window.location.href = url;
  
          event.preventDefault();
}
);
document.querySelector(".MyContainer").appendChild(outerDivElement);
}

  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error fetching data:', error);
  });
} 
    window.onload=pd;