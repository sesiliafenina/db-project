var baseURL = readTextFile('ip.txt')
console.log(baseURL);
var asin = null;
window.onload = renderPage();

function renderPage(){
  // get data from previous page
  var data = localStorage.getItem('title');
  if (data == 'increasing' || data == 'decreasing'){
    getBookByReview(data);
  }
  else if (data != undefined){
    console.log(data);
    var search = document.getElementsByClassName('search-title')[0];
    search.innerHTML = 'Searching for = ' + data;
    //by right should do this after we move to next page
    localStorage.removeItem('title');
    // var splitted = data.split(',')
    // var title = splitted[0]
    // var author = splitted[1]
    console.log("title:" + title)
    console.log("author:" + author)
    var param_data = data.split(' ').join('+');
    getReviews('http://'+ baseURL + ':5000/search?title=' + param_data)
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

Handlebars.registerHelper('count', function(){
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
  getReviews('http://'+ baseURL + ':5000/search?title=test')
  .then(data => {
    console.log(data);
    createHTML(data);
  });
}

function getBookByReview(mode){
  getReviews('http://'+ baseURL + ':5000/sortByRating?rating_preference=' + mode)
  .then(data => {
    console.log(data);
    createHTML(data);
  });
}

function getBookByGenre(genre){
  getReviews('http://'+ baseURL + ':5000/sortByGenres?genre=' + genre)
  .then(data => {
    console.log(data);
    createHTML(data);
  });
}

function createHTML(reviewData){
  if (reviewData.length != 0){
    var rawTemplate = document.getElementById("booksTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(reviewData);


    var bookContainer = document.getElementById("book_container");
    bookContainer.innerHTML = ourGeneratedHTML;
  }
  else{
    var message = document.getElementById("message");
    message.innerHTML = "No Books Found";
  }
}

function moveToReview(){
  // console.log(asin);
  var title = document.getElementsByClassName('book_title')[0].innerHTML;
  var price = document.getElementsByClassName('author')[0].innerHTML;
  var summary = document.getElementsByClassName('book_summary')[0].innerHTML;
  var asin = document.getElementsByClassName('asin')[0].innerHTML;
  var imUrl = document.getElementsByClassName('book_cover')[0].getAttribute('src');
  var data = title + "|||" + price + "|||" + summary + "|||" + asin + "|||" + imUrl;

  localStorage.setItem('objectToPass', data);
  window.location.href = 'reviews.html';
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var allText = null;
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                console.log(allText);
                // return allText;
                // alert(allText);
            }
        }
    }
    rawFile.send(null);
    return allText;
}
