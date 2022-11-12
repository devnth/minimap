function businessCard() {
  var x = document.getElementById("businessCard");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("miniMap").style.display = "none"
    document.getElementById("youtubeModal").style.display = "none"
    document.getElementById("googleModal").style.display = "none"
    document.getElementById("rain").style.display = "none"
    document.getElementById("splat").style.display = "none"
    document.getElementById("back").style.display = "none"
    document.getElementById("single").style.display = "none"

  } else {
    x.style.display = "none";
  }
}

function rainEffect() {
  var x = document.getElementById("rain");
  var y = document.getElementById("splat");
  var z = document.getElementById("back");
  var a = document.getElementById("single");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "block";
    a.style.display = "block"; 

    x.style.backgroundColor="black"
    x.style.height="100%"
    x.style.opacity="0.7"
    x.style.marginTop = "-38%";
    document.getElementById("miniMap").style.display = "none"
    document.getElementById("youtubeModal").style.display = "none"
    document.getElementById("googleModal").style.display = "none"
  } else {
    x.style.display = "none";
  }
}

function Youtube() {
  var x = document.getElementById("youtubeModal");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("businessCard").style.display = "none"
    document.getElementById("miniMap").style.display = "none"
    document.getElementById("googleModal").style.display = "none"
    document.getElementById("rain").style.display = "none"
    document.getElementById("splat").style.display = "none"
    document.getElementById("back").style.display = "none"
    document.getElementById("single").style.display = "none"
  } else {
    x.style.display = "none";
  }
}
function Google() {
  var x = document.getElementById("googleModal");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("businessCard").style.display = "none"
    document.getElementById("youtubeModal").style.display = "none"
    document.getElementById("miniMap").style.display = "none"
    document.getElementById("rain").style.display = "none"
    document.getElementById("splat").style.display = "none"
    document.getElementById("back").style.display = "none"
    document.getElementById("single").style.display = "none"
  } else {
    x.style.display = "none";
  }
}

function miniMap() {
  var x = document.getElementById("img");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("businessCard").style.display = "none"
    document.getElementById("youtubeModal").style.display = "none"
    document.getElementById("googleModal").style.display = "none"
    document.getElementById("rain").style.display = "none"
    document.getElementById("splat").style.display = "none"
    document.getElementById("back").style.display = "none"
    document.getElementById("single").style.display = "none"
  } else {
    x.style.display = "block";
  }
}

function musicButton() {
  var x = document.getElementById("musicButton1");
  var y = document.getElementById("musicButton2");
  if (x.style.display === "none") {
    if (y.style.display === "none") {
      x.style.display = "block";
    } else {
      y.style.display = "none";
    }
  } else if (x.style.display === "block") {
    y.style.display = "none";
    x.style.display = "none";
  } else if (y.style.display === "block") {
    y.style.display = "none";
  }
}


function play() {
  var x = document.getElementById("audio");
  x.play();
  var y = document.getElementById("musicButton2");
  y.style.display = "block";
  var y = document.getElementById("musicButton1");
  y.style.display = "none";
}

function pause() {
  var x = document.getElementById("audio");
  x.pause();
  var y = document.getElementById("musicButton1");
  y.style.display = "block";
  var y = document.getElementById("musicButton2");
  y.style.display = "none";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}