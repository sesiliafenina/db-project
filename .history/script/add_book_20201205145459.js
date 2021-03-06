import {ip} from './ip.js'
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
  //TODO: generate a dynamic asin number
  var asin = 'B85868607800' //test asin
  var data = {'title': document.getElementById('bookTitle').value, 'asin': asin, 'price': document.getElementById('bookPrice').value, categories:['test'], 'description': document.getElementById('bookDescription').value}
  console.log(data)
  postData('http://54.243.84.231:5000/addBook', data)


}
