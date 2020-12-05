var baseURL = readTextFile('ip.txt')
console.log(baseURL);
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
  postData('http://'+ baseURL + ':5000/addBook', data)
  .then(data =>{
    console.log(data);
    alert('thank you for adding a book!')
  })
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
