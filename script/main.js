// async function getData(url=''){
//   const response = await fetch(url, {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//   });
//   return response.json();
// }

// function getHttp(){
//   getData('http://54.165.167.219:80/sortByRating?rating_preference=increasing')
//   .then(data => {
//     console.log(data);
//     createHTML(data);
//   });
// }

// function createHTML(reviewData){
//     var rawTemplate = document.getElementById("booksTemplate").innerHTML;
//     var compiledTemplate = Handlebars.compile(rawTemplate);
//     var ourGeneratedHTML = compiledTemplate(reviewData);

//     var bookContainer = document.getElementById("book_container");
//     bookContainer.innerHTML = ourGeneratedHTML;
// }

// getHttp();

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data)
  });
  console.log(response)
  return response.json(); // parses JSON response into native JavaScript objects
}

function addBook() {
  var asin = 'B85868607800' //test asin
  var data = {'title': document.getElementById('bookTitle').value, 'asin': asin, 'price': document.getElementById('bookPrice').value, categories:['test'], 'description': document.getElementById('bookDescription').value}
  console.log(data)
  postData('http://54.243.84.231:80/addBook', data)
}

function addReview() {
  var asin = 'B85868607800' //test asin 
  var date = new Date()
  var reviewDate = (date.getMonth()+1) +' ' + (date.getDate()) + ' ' + date.getFullYear()
  var reviewerID = 'A1FDJ34938'  //test
  var reviewerName = 'test user' //test
  var overall = 1  //test
  var data = {'asin': asin, 'overall': overall, 'reviewText': document.getElementById('reviewText').value, 'summary': document.getElementById('summary').value, 'reviewTime': reviewDate, 'reviewerID': reviewerID, 'reviewerName': reviewerName}
  console.log(data)
  postData('http://54.243.84.231:80/addReview')
}

function postHttp(){
  postData('https://jsonplaceholder.typicode.com/posts', { answer: 42 })
    .then(data => {
      console.log(data);
    });
}

function nextPage(){
  var query = document.getElementById('search-query').value;
  console.log(query);

  localStorage.setItem('title', query);
  window.location.href = "browse.html";
}
