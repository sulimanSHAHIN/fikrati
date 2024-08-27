const registerForm = document.querySelector('.Search-Icon');

registerForm.addEventListener('click', (event) => {

event.preventDefault();
const name = document.querySelector('.Category-Search').value;
    const data = {
        name
    };
    fetch('http://127.0.0.1:8000/api/searchcourse', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        "Accept":'application/json',
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    console.log(data[0].id);

      // Handle the response from the API
    if (data[0].id!=null) {
document.querySelector(".Result").style.display="block";
      let parent=  document.createElement("div");
      parent.className="One-result d-flex";
      let name=  document.createElement("div");
      name.className="Result-name";
      name.innerHTML=data[0].name;
      let photo=  document.createElement("div");
      photo.className="Result-logo";
      let image=  document.createElement("img");
      image.setAttribute('src',data[0].image);
      image.className="Resultimg";
      photo.appendChild(image);
      parent.appendChild(photo);
      parent.appendChild(name);
      document.querySelector(".Result").appendChild(parent);
    } else {
        // Handle any errors that occur during the API request
document.querySelector(".Result").style.display="block";
        let parent=  document.createElement("div");
        parent.className="One-result d-flex";
        let name=  document.createElement("div");
        name.className="Result-name";
        name.innerHTML="لا نتائج";
        parent.style.textAlign="center";
        parent.style.justifyContent="center";
        parent.appendChild(name);
        document.querySelector(".Result").appendChild(parent);
    }
    })
    .catch(error => {
    console.error(error);
      // Handle any errors that occur during the API request
    });
}
);

function cate() {

  fetch('http://127.0.0.1:8000/api/getallspecil')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    // Do something with the response data
    console.log(data);
      for (var i=0;i<data.length;i++)
{
const outerDiv = document.createElement('div');
outerDiv.classList.add('One-Category');
outerDiv.setAttribute('data-id', data[i].id); // Set the data-id attribute to the id value

// Create the inner div element for the image
const imgDiv = document.createElement('div');
imgDiv.classList.add('Category-img');

// Create the image element
const img = document.createElement('img');
img.src = data[i].image;
img.alt = '';
img.srcset = '';
img.classList.add('Category-img1');

// Append the image element to the inner div element
imgDiv.appendChild(img);

// Create the inner div element for the category name
const nameDiv = document.createElement('div');
nameDiv.classList.add('Category-name');
nameDiv.textContent = data[i].name;

// Append the inner div elements to the outer div element
outerDiv.appendChild(imgDiv);
outerDiv.appendChild(nameDiv);

// Append the outer div element to the document body
outerDiv.addEventListener('click', (event) => {
  const id = event.currentTarget.getAttribute('data-id'); // Get the id value from the clicked element
  window.location.href= `sub-category.html?id=${id}`;
  event.preventDefault();
}
);
document.querySelector(".MyContainer").appendChild(outerDiv);
}
  

  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error fetching data:', error);
  });

} 
  window.onload=cate;