const quoteBox = document.getElementById("quoteBox");
const quoteButton = document.querySelector('.quoteButton');
const photoBox = document.querySelector('.photoBox');
const xhr = new XMLHttpRequest();
const randNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
  };
const photos = [
  {},
  {
    "image": "../img/000dcb96-800.jpg"
  },
  {
    "image": "../img/BN-EF500_herzog_G_20140822075050.jpg"
  },
  {
    "image": "../img/werner-herzog-bear.jpg"
  },
  {
    "image": "../img/lochness.jpg"
  },
  {
    "image": "../img/herzog_beat-presser.jpg"
  }
]

//  Function recieves prompt from quote button click to retrieve random quote from quote.json and post it in HTML form to the quote box div and posts random photo from photos object
xhr.onreadystatechange = () => {
  if(xhr.readyState === 4) {
    let quotes = JSON.parse(xhr.responseText);
    let randQuote = randNum(1, quotes.length);
    let quoteHTML = '<h4 class="quote">' + quotes[randQuote].quote + '</h4>';
    quoteBox.innerHTML = quoteHTML;
    let randPhoto = randNum(1, photos.length);
    photoBox.style.backgroundImage = "url('"+photos[randPhoto].image+"')";

  }
};

//Function loads a random quote on page load and reload
window.onload = () => {
  xhr.open('GET', 'json/quote.json');
  xhr.send();
}

//Function to open and send AJAX request everytime quote button is clicked
quoteButton.addEventListener('click', () => {
  xhr.open('GET', 'json/quote.json');
  xhr.send();
    
});
