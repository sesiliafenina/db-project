window.onload = renderPage();

function renderPage(){
  // get data from previous page
  var data = localStorage.getItem('objectToPass');
  data = data.split(',');
  //by right should do this after we move to next page
  localStorage.removeItem('objectToPass');
  var title = data[0];
  var price = data[1];
  var summary = data[2];

  document.getElementsByClassName('book_title')[0].innerHTML = title;
  document.getElementById('author').innerHTML = "Price : " + price;
  document.getElementById('book_summary').innerHTML = summary;
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

function getHttp(){
  getReviews('http://54.243.84.231:80/sortByRating?rating_preference=increasing')
  .then(data => {
    console.log(data);
    createHTML(data);
  });
}

function createHTML(reviewData){
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

getHttp();

// var star = document.getElementById('starfour');
// star.className = 'fa fa-star checked';
