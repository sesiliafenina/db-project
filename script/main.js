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
//   query = document.getElementById('search-query').value;
//   console.log(query);
//   getData('http://54.165.167.219:80/search?title=' + query)
//   .then(data => {
//     console.log(data);
//     createHTML(data);
//   });
// }

// function createHTML(reviewData){
//     var rawTemplate = document.getElementById("booksTemplate").innerHTML;
//     var compiledTemplate = Handlebars.compile(rawTemplate);
//     var ourGeneratedHTML = compiledTemplate(reviewData);
//
//     var bookContainer = document.getElementById("book_container");
//     bookContainer.innerHTML = ourGeneratedHTML;
// }

function nextPage(){
  var query = document.getElementById('search-query').value;
  console.log(query);

  localStorage.setItem('title', query);
  window.location.href = "browse.html";
}
