window.onload = renderPage();

function renderPage(){
  // get data from previous page
  var data = localStorage.getItem('title');
  if (data != undefined){
    console.log(data);
    var search = document.getElementsByClassName('search-title')[0];
    search.innerHTML = 'Search = ' + data;
    //by right should do this after we move to next page
    localStorage.removeItem('title');
    getReviews('http://54.243.84.231:80/search?title=' + data)
    .then(data => {
      console.log(data);
      createHTML(data);
    });
  }
  else{
    getHttp();
  }
}

function nextPage(){
  var query = document.getElementById('search-query').value;
  console.log(query);

  localStorage.setItem('title', query);
  window.location.href = "browse.html";
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
  getReviews('http://54.243.84.231:80/search?title=test')
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

function nextPage(){
  var title = document.getElementsByClassName('book_title')[0].innerHTML;
  var price = document.getElementsByClassName('author')[0].innerHTML;
  var summary = document.getElementsByClassName('book_summary')[0].innerHTML;
  var data = [title, price, summary];
  // {
  //   'title' : title,
  //   'price' : price,
  //   'summary' : summary
  // };

}
