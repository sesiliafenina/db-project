

var asin;

window.onload = renderPage();

function renderPage(){
  var data = localStorage.getItem('objectToPass');
  // console.log(data);
  data = data.split('|||');
  console.log(data);
  var title = data[0];
  var price = data[1];
  var summary = data[2];
  asin = data[3]
  var imUrl = data[4]


  document.getElementsByClassName('book_title')[0].innerHTML = title;
  document.getElementById('author').innerHTML = "Author : " + price;
  document.getElementById('book_summary').innerHTML = summary;
  document.getElementsByClassName('asin')[0].innerHTML = asin;
  document.getElementsByClassName('book_cover')[0].setAttribute('src', imUrl);
}

async function getReviews(url=''){
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
  });
  return response.json();
}

function getHttp(asin){
  getReviews('http://54.243.84.231:5000/reviews/' + asin)
  .then(data => {
    console.log(data);
    createHTML(data);
  });
}

function createHTML(reviewData){
  var reviewsPlaceholder = document.getElementsByClassName("review_placeholder")[0];
    if (reviewData.length == 0){
      reviewsPlaceholder.innerHTML = "No reviews found";
    }
    else{
      reviewsPlaceholder.innerHTML = "Reviews :";
    }
    var rawTemplate = document.getElementById("reviewsTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(reviewData);

    var reviewsContainer = document.getElementById("reviews_container");
    reviewsContainer.innerHTML = ourGeneratedHTML;
}

Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

Handlebars.registerHelper('times_minus', function(n, block) {
    var accum = '';
    for(var i = 0; i < 5 - n; ++i)
        accum += block.fn(i);
    return accum;
});

getHttp(asin);

function nextPages(){
  localStorage.removeItem('objectToPass');
  var title = document.getElementsByClassName('book_title')[0].innerHTML;
  var price = document.getElementsByClassName('author')[0].innerHTML;
  price = price.split(' ')[2];
  var asin = document.getElementsByClassName('asin')[0].innerHTML;
  var data = title + "|||" + price + "|||" + asin;

  localStorage.setItem('info', data);
  window.location.href = 'review.html';
}
