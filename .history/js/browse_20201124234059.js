var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','localhost:5000/sortByRating')
// localhost:5000/
ourRequest.onload = function(){
    if(ourRequest.status>= 200 && ourRequest.status<400){
        var data = JSON.parse(ourRequest.responseText);
        createHTML(data)
        console.log(data)
    }else{
        console.log("ERROR")
    }
};

ourRequest.onerror = function(){
    console.log("CONNECTION ERROR");
}

ourRequest.send(JSON.stringify({
    "rating_preference":"decreasing"
}));

function createHTML(reviewData){
    var rawTemplate = document.getElementById("reviewTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(reviewData);

    var reviewContainer = document.getElementById("reviews-container")
    reviewContainer.innerHTML = ourGeneratedHTML;
}