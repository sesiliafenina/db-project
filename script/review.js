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

function main(){
  var title = document.getElementsByClassName('review_title')[0];
  var contents = document.getElementsByClassName('review_contents')[0];
  console.log(title.value);
  console.log(title.contents);
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

function postHttp(){
  var data = {};
  // postData('https://jsonplaceholder.typicode.com/posts', { answer: 42 })
  //   .then(data => {
  //     console.log(data);
  //   });
  main();
}
