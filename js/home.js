window.onscroll = function() {scrollFunction()};
document.getElementById("header").style.display="none";
var dropdown=0;
var temp=100+(screen.height*2);
var flag=false;
setTimeout(()=>{
    document.getElementById("loader").style.display="none";
    document.getElementById("header").style.display="block";
},3000);

function scrollFunction(){
    if(document.body.scrollTop > temp || document.documentElement.scrollTop > temp){
        if(!flag){
            flag=true;
            document.getElementById("about-us-line1").style.height="300px";
            document.getElementById("about-us-circle1").style.marginTop="300px";

            document.getElementById("about-us-line2").style.height="500px";
            document.getElementById("about-us-circle2").style.marginTop="500px";

            document.getElementById("about-us-line3").style.height="400px";
            document.getElementById("about-us-circle3").style.marginTop="400px";

            document.getElementById("about-us-line4").style.height="150px";
            document.getElementById("about-us-circle4").style.marginTop="150px";


            var i1=0,i2=0,i3=0,i4=0;

            var interval1=setInterval(()=>{
                i1++;
                document.getElementById("about-us-1").innerHTML=i1;
                if(i1==970){
                    clearInterval(interval1);
                    document.getElementById("about-us-1").innerHTML="970";
                }
            },5)
            
            var interval2=setInterval(()=>{
                i2+=10;
                document.getElementById("about-us-2").innerHTML=i2;
                if(i2==5150){
                    clearInterval(interval2);
                    document.getElementById("about-us-2").innerHTML="5,150";
                }        
            },17);
            var interval3=setInterval(()=>{
                i3+=10;
                document.getElementById("about-us-3").innerHTML=i3;
                if(i3==4900){
                    clearInterval(interval3);
                    document.getElementById("about-us-3").innerHTML="4,900";
                }        
            },17);
            document.getElementById("about-us-4").innerHTML="0";
            var interval4=setInterval(()=>{
                i4++;
                document.getElementById("about-us-4").innerHTML=i4%6;
                if(i4==400){
                    clearInterval(interval4);
                    document.getElementById("about-us-4").innerHTML="5 +";
                }        
            },25);
        }
    }
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById("navbar").style.position="fixed";
        document.getElementById("navbar").style.top="0px";
        document.getElementById("navbar").classList.remove("nav-menu1");
        document.getElementById("navbar").classList.add("nav-menu2");
        document.getElementById("navlogo").style.paddingTop="15px";
        document.getElementById("drop-down").style.top="80px";

    }else{
        document.getElementById("navbar").style.position="absolute";
        document.getElementById("navbar").style.top="100px";
        document.getElementById("navbar").classList.remove("nav-menu2");
        document.getElementById("navbar").classList.add("nav-menu1");
        document.getElementById("navlogo").style.paddingTop="7px";
        document.getElementById("drop-down").style.top=(150-(document.body.scrollTop || document.documentElement.scrollTop))+"px";
    }        
}
async function dropDown() {
    if(dropdown%2==0){
        document.getElementById("drop-down-ul").classList.remove("close");
        document.getElementById("drop-down-ul").classList.add("open");
        document.getElementById("drop-down").style.display="block";    
    }else{
        document.getElementById("drop-down-ul").classList.remove("open");
        document.getElementById("drop-down-ul").classList.add("close");
        setTimeout(()=>{
            document.getElementById("drop-down").style.display="none";
        },400);
    }
    dropdown++; 
}