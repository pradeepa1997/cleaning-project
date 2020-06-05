var image=0;

setInterval(()=>{
    document.getElementById("slider"+((image%3)+1).toString()).style.display="none";
    document.getElementById("dot"+((image%3)+1).toString()).style.backgroundColor="transparent";
    image++;
    document.getElementById("slider"+((image%3)+1).toString()).style.display="block";
    document.getElementById("dot"+((image%3)+1).toString()).style.backgroundColor="white";
},10000);

function next(){
    document.getElementById("slider"+((image%3)+1).toString()).style.display="none";
    document.getElementById("dot"+((image%3)+1).toString()).style.backgroundColor="transparent";
    image++;
    document.getElementById("slider"+((image%3)+1).toString()).style.display="block";
    document.getElementById("slider"+((image%3)+1).toString()).style.display="block";
    document.getElementById("dot"+((image%3)+1).toString()).style.backgroundColor="white";
}
function pre(){
    document.getElementById("slider"+((image%3)+1).toString()).style.display="none";
    document.getElementById("dot"+((image%3)+1).toString()).style.backgroundColor="transparent";
    image--;
    document.getElementById("slider"+((image%3)+1).toString()).style.display="block";
    document.getElementById("slider"+((image%3)+1).toString()).style.display="block";
    document.getElementById("dot"+((image%3)+1).toString()).style.backgroundColor="white";
}
