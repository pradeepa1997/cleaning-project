"use strict";

var image = 0;
setInterval(function () {
  document.getElementById("slider" + (image % 3 + 1).toString()).style.display = "none";
  document.getElementById("slidertext" + (image % 3 + 1).toString()).style.display = "none";
  document.getElementById("dot" + (image % 3 + 1).toString()).style.backgroundColor = "transparent";
  image++;
  document.getElementById("slider" + (image % 3 + 1).toString()).style.display = "block";
  document.getElementById("slidertext" + (image % 3 + 1).toString()).style.display = "block";
  document.getElementById("dot" + (image % 3 + 1).toString()).style.backgroundColor = "white";
}, 10000);

function next() {
  document.getElementById("slider" + (image % 3 + 1).toString()).style.display = "none";
  document.getElementById("dot" + (image % 3 + 1).toString()).style.backgroundColor = "transparent";
  document.getElementById("slidertext" + (image % 3 + 1).toString()).style.display = "none";
  image++;
  document.getElementById("slider" + (image % 3 + 1).toString()).style.display = "block";
  document.getElementById("slidertext" + (image % 3 + 1).toString()).style.display = "block";
  document.getElementById("dot" + (image % 3 + 1).toString()).style.backgroundColor = "white";
}

function pre() {
  document.getElementById("slider" + (image % 3 + 1).toString()).style.display = "none";
  document.getElementById("dot" + (image % 3 + 1).toString()).style.backgroundColor = "transparent";
  document.getElementById("slidertext" + (image % 3 + 1).toString()).style.display = "none";

  if (image === 0) {
    image = 2;
  } else {
    image--;
  }

  document.getElementById("slider" + (image % 3 + 1).toString()).style.display = "block";
  document.getElementById("slidertext" + (image % 3 + 1).toString()).style.display = "block";
  document.getElementById("dot" + (image % 3 + 1).toString()).style.backgroundColor = "white";
}

function select(id) {
  console.log(id);
  document.getElementById("slider" + (image % 3 + 1).toString()).style.display = "none";
  document.getElementById("dot" + (image % 3 + 1).toString()).style.backgroundColor = "transparent";
  document.getElementById("slidertext" + (image % 3 + 1).toString()).style.display = "none";
  image = id;
  document.getElementById("slider" + (image % 3 + 1).toString()).style.display = "block";
  document.getElementById("slidertext" + (image % 3 + 1).toString()).style.display = "block";
  document.getElementById("dot" + (image % 3 + 1).toString()).style.backgroundColor = "white";
}