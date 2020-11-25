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
  getReviews('http://54.165.167.219:80/search?title=test')
  .then(data => {
    console.log(data);
    createHTML(data);
  });
}

getHttp();

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
  localStorage.setItem('objectToPass', data);
  window.location.href = "reviews.html";
}
