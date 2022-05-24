'use strict';

// ***** GLOBAL VARIABLES *****

let voteCount = 10;
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

function renderImgs(){

  imgOne.src = allProducts[0].photo;
  imgTwo.src = allProducts[1].photo;
  imgThree.src = allProducts[2].photo;
}

renderImgs();

// ***** EVENT HANDLERS *****



// ***** EVENT LISTENERS *****


