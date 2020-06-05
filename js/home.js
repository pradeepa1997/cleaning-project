window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById("navbar").style.position="fixed";
        document.getElementById("navbar").style.top="0px";
        document.getElementById("navbar").classList.remove("nav-menu1");
        document.getElementById("navbar").classList.add("nav-menu2");

    }else{
        document.getElementById("navbar").style.position="absolute";
        document.getElementById("navbar").style.top="100px";
        document.getElementById("navbar").classList.remove("nav-menu2");
        document.getElementById("navbar").classList.add("nav-menu1");
    }        
    // if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        
    // }else{
        
    // }
}