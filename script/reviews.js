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
  getReviews('http://54.165.167.219:80/sortByRating?rating_preference=increasing')
  .then(data => {
    console.log(data);
    createHTML(data);
  });
}

getHttp();

function createHTML(reviewData){
    var rawTemplate = document.getElementById("reviewsTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(reviewData);

    var reviewsContainer = document.getElementById("reviews_container");
    reviewsContainer.innerHTML = ourGeneratedHTML;
}

// var star = document.getElementById('starfour');
// star.className = 'fa fa-star checked';
