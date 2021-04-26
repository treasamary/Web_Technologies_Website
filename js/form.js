var item=document.getElementById("image");
var divElem=document.querySelector("#divitem");




function changer(){
    divElem.innerHTML="<p>your item is missing</p>";
}
function reset(){
    item.removeAttribute("hidden","true");
}
function hide(){
   
    item.setAttribute("hidden","true");
}
function changeimage(){
    item.removeAttribute("src","images/mod2.jpg");
    item.setAttribute("src","images/mod22.jpg");
}
function resetimage(){
    item.removeAttribute("src","images/mod22.jpg");
    item.setAttribute("src","images/mod2.jpg");
}