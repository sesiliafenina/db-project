var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/pets-data.json')
ourRequest.onload = function(){
    if(ourRequest.status>= 200 && ourRequest.status<400){
        var data = JSON.parse(ourRequest.responseText);
        console.log(data);
    }else{
        console.log("ERROR")
    }
};

ourRequest.onerror = function(){
    console.log("CONNECTION ERROR");
}

ourRequest.send();

function createHTML(reviewData){
    var rawTemplate = document.getElementById("reviewTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(reviewData);
}