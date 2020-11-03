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