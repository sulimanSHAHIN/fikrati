console.log("working");

function disc() {

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
        for (var i=0;i<=data.length;i++)
  {
  const outerDiv = document.createElement('div');
  outerDiv.classList.add('One-Category');
  
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
    window.location.href= `sub-category.html?id=${data[0].id}`;
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
    window.onload=disc;