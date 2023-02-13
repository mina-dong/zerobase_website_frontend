
var basicheart, fillheart;
basicheart = document.getElementById("heart");
fillheart  = document.getElementById("fill-heart");

basicheart.addEventListener("click",function(){
    basicheart.style.display="none";
    fillheart.style.display="block";
})

fillheart.addEventListener("click",function(){
    fillheart.style.display="none";
    basicheart.style.display="block";
})

var basicbookmark, fillbookmark;
basicbookmark = document.getElementById("bookmark");
fillbookmark  = document.getElementById("fill-bookmark");

basicbookmark.addEventListener("click",function(){
    basicbookmark.style.display="none";
    fillbookmark.style.display="block";
})

fillbookmark.addEventListener("click",function(){
    fillbookmark.style.display="none";
    basicbookmark.style.display="block";
})
