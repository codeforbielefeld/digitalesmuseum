'use strict';

window.addEventListener('load', function () {

  console.log("Hello World!");

});


function hasGetUserMedia() {
    // Note: Opera builds are unprefixed.
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia || navigator.msGetUserMedia);
  }
  
  if (hasGetUserMedia()) {
    // Good to go!
  } else {
    alert('getUserMedia() is not supported in your browser');
  }

  function callImageAPI() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    request.send();
    request.onload = () => {
      if (request.status === 200) {
        console.log(JSON.parse(request.response));
      }  else {
        console.log(`error ${request.status} ${request.statusText}`);
      }
   } 
  }