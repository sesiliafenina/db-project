// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET','54.165.167.219:80/sortByRating?rating_preference=increasing') 
// //54.165.167.219:80
// // localhost:5000/
// ourRequest.onload = function(){
//     if(ourRequest.status>= 200 && ourRequest.status<400){
//         var data = JSON.parse(ourRequest.responseText);
//         createHTML(data)
//         console.log(data)
//         console.log("trying")
//     }else{
//         console.log("ERROR")
//     }
// };

// ourRequest.onerror = function(){
//     console.log("CONNECTION ERROR");
// }

// ourRequest.send();

async function getData(url=''){
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    });
    return response.json();
  }
  
  function getHttp(){
    getData('http://54.165.167.219:80/sortByRating?rating_preference=increasing')
    .then(data => {
      console.log(data);
    });
  }
  
  getHttp();

function createHTML(reviewData){
    var rawTemplate = document.getElementById("reviewTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(reviewData);

    var reviewContainer = document.getElementById("reviews-container")
    reviewContainer.innerHTML = ourGeneratedHTML;
}