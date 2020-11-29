window.onload = renderPage();
var asin = null;

function renderPage(){
  // get data from previous page
  var data = localStorage.getItem('title');
  if (data != undefined){
    console.log(data);
    var search = document.getElementsByClassName('search-title')[0];
    search.innerHTML = 'Search = ' + data;
    //by right should do this after we move to next page
    localStorage.removeItem('title');
    var param_data = data.split(' ').join('+');
    getReviews('http://54.243.84.231:5000/search?title=' + param_data)
    .then(data => {
      console.log(data);
      createHTML(data);
    });
  }
  else{
    getHttp();
  }
}

Handlebars.registerHelper('setImage', function(imUrl){
  console.log(imUrl);
  if (imUrl == undefined){
    return "assets/placeholder.png";
  }
  else{
    return imUrl;
  }
})

async function getReviews(url=''){
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
  });
  return response.json();
}

function getHttp(){
  getReviews('http://54.243.84.231:5000/search?title=Saboteur+(Star+Wars:+Darth+Maul,+%231)#1)')
  .then(data => {
    console.log(data);
    createHTML(data);
  });
}

function createHTML(reviewData){
    var rawTemplate = document.getElementById("booksTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(reviewData);

    var bookContainer = document.getElementById("book_container");
    bookContainer.innerHTML = ourGeneratedHTML;
}

function moveToReview(){
  var title = document.getElementsByClassName('book_title')[0].innerHTML;
  var price = document.getElementsByClassName('author')[0].innerHTML;
  var summary = document.getElementsByClassName('book_summary')[0].innerHTML;
  var asin = document.getElementsByClassName('asin')[0].innerHTML;
  var data = title + "|||" + price + "|||" + summary + "|||" + asin;

  localStorage.setItem('objectToPass', data);
  window.location.href = 'reviews.html';
}
