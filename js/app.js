'use strict';

// ***** GLOBAL VARIABLES *****

let voteCount = 25;
let allProducts = [];

// ***** DOM REFERENCES *****

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultsBtn = document.getElementById('results-btn');
let resultsList = document.getElementById('results-list');

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

function renderImgs(){

  let productImageOne = getRandomImage();
  let productImageTwo = getRandomImage();
  let productImageThree = getRandomImage();

  while(productImageOne === productImageTwo || productImageOne === productImageThree || productImageTwo === productImageThree){
    productImageTwo = getRandomImage();
    productImageThree = getRandomImage();
    // while(productImageThree === productImageOne || productImageTwo){
    //   productImageThree = getRandomImage();
    // }
  }

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
  }

}

function handleShowResults(){
  if(voteCount === 0){
    for(let i = 0; i < allProducts.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${allProducts[i].name} had ${allProducts[i].votes} votes, and was seen ${allProducts[i].views} times.`;
      resultsList.appendChild(liElement);
    }
  }
}

// ***** EVENT LISTENERS *****

imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);
