import {ip} from './ip.js'
baseURL = ip.ip
// const btn = document.querySelector("button");
// const post = document.querySelector(".post");
// const widget = document.querySelector(".star-widget");
// const editBtn = document.querySelector(".edit");
// btn.onclick = () => {
//   widget.style.display = "none";
//   post.style.display = "block";
//   editBtn.onclick = () => {
//     widget.style.display = "block";
//     post.style.display = "none";
//   }
//   return false;
// }

window.onload = renderPage();

function renderPage(){
  // get data from previous page
  var data = localStorage.getItem('info');
  console.log(data);
  data = data.split('|||');
  var title = data[0];
  var price = data[1];
  var asin = data[2];

  document.getElementsByClassName('book_title')[0].innerHTML = title;
  document.getElementsByClassName('author')[0].innerHTML = "Price : " + price;
  document.getElementsByClassName('asin')[0].innerHTML = asin;
}

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
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// function addBook() {
//   var asin = 'B85868607800' //test asin
//   var data = {'title': document.getElementById('bookTitle').value, 'asin': asin, 'price': document.getElementById('bookPrice').value, categories:['test'], 'description': document.getElementById('bookDescription').value}
//   console.log(data)
//   postData('http://54.243.84.231:80/addBook', data)
// }

function addReview() {
  var asin = document.getElementsByClassName('asin')[0].innerHTML;
  var date = new Date()
  var reviewDate = (date.getDate()) +' ' + (date.getMonth()+1) + ' ' + date.getFullYear()
  console.log(reviewDate);
  var reviewerID = 'A1FDJ34938'  //test
  var reviewerName = 'test user' //test
  var overall = 1  //test
  var data = {'asin': asin, 'overall': overall, 'reviewText': document.getElementById('reviewText').value, 'summary': document.getElementById('summary').value, 'reviewTime': reviewDate, 'reviewerID': reviewerID, 'reviewerName': reviewerName}
  console.log(data)
  //by right should do this after we move to next page
  localStorage.removeItem('info');
  postData('http://54.243.84.231:5000/addReview', data)
  .then(data =>{
    console.log(data);
  })
}
