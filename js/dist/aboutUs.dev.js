"use strict";

window.onscroll = function () {
  scrollFunction();
};

var dropdown = 0;
document.getElementById("navbar-ul").style.paddingLeft = '0px';

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").classList.remove("nav-menu1");
    document.getElementById("navbar").classList.add("nav-menu2");
    document.getElementById("navlogo").style.paddingTop = "15px";
    document.getElementById("drop-down").style.top = "80px";
  } else {
    document.getElementById("navbar").style.position = "absolute";
    document.getElementById("navbar").style.top = "100px";
    document.getElementById("navbar").classList.remove("nav-menu2");
    document.getElementById("navbar").classList.add("nav-menu1");
    document.getElementById("navlogo").style.paddingTop = "7px";
    document.getElementById("drop-down").style.top = 150 - (document.body.scrollTop || document.documentElement.scrollTop) + "px";
  }
}

function dropDown() {
  return regeneratorRuntime.async(function dropDown$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (dropdown % 2 == 0) {
            document.getElementById("drop-down-ul").classList.remove("close");
            document.getElementById("drop-down-ul").classList.add("open");
            document.getElementById("drop-down").style.display = "block";
          } else {
            document.getElementById("drop-down-ul").classList.remove("open");
            document.getElementById("drop-down-ul").classList.add("close");
            setTimeout(function () {
              document.getElementById("drop-down").style.display = "none";
            }, 400);
          }

          dropdown++;

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

document.getElementById("navbar-ul").style.paddingLeft = '0px';