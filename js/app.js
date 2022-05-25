'use strict';

// ***** GLOBAL VARIABLES *****

let voteCount = 25;
let allProducts = [];

// ***** DOM REFERENCES *****

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

// ***** CANVAS REFERENCE *****

let ctx = document.getElementById('my-chart').getContext('2d');

// ***** CONSTRUCTOR *****

function Product(name, fileExtension = 'jpg'){
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExtension}`;

  allProducts.push(this);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');

// ***** HELPER FUNCTIONS / EXECUTABLE CODE *****

// got from w3resources
function getRandomImage(){
  return Math.floor(Math.random()*allProducts.length);
}

let imageArray = [];

function renderImgs(){

  while(imageArray.length < 6){
    let randomNumber = getRandomImage();
    if(!imageArray.includes(randomNumber)){
      imageArray.push(randomNumber);
    }
  }

  console.log(imageArray);

  let productImageOne = imageArray.shift();
  let productImageTwo = imageArray.shift();
  let productImageThree = imageArray.shift();

  imgOne.src = allProducts[productImageOne].photo;
  imgOne.alt = allProducts[productImageOne].name;
  allProducts[productImageOne].views++;

  imgTwo.src = allProducts[productImageTwo].photo;
  imgTwo.alt = allProducts[productImageTwo].name;
  allProducts[productImageTwo].views++;

  imgThree.src = allProducts[productImageThree].photo;
  imgThree.alt = allProducts[productImageThree].name;
  allProducts[productImageThree].views++;
}

renderImgs();

// ***** FUNCTION TO RENDER CHART *****

function renderChart(){
  let productNames = [];
  let productVotes = [];
  let productViews = [];

  for(let i = 0; i < allProducts.length; i++){
    productNames.push(allProducts[i].name);
    productVotes.push(allProducts[i].votes);
    productViews.push(allProducts[i].views);
  }

  let myChartObj = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: productVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: productViews,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  new Chart(ctx, myChartObj);

}

// ***** EVENT HANDLERS *****

function handleClick(event){
  voteCount--;

  let imgClicked = event.target.alt;

  for(let i = 0; i < allProducts.length; i++){
    if(imgClicked === allProducts[i].name){
      allProducts[i].votes++;
    }
  }

  renderImgs();

  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick);
    renderChart();
  }

}

// ***** EVENT LISTENERS *****

imgContainer.addEventListener('click', handleClick);
