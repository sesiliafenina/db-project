var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/pets-data.json')
ourRequest.onload = function(){
    if(ourRequest.status>= 200 && ourRequest.status<400)
}