const openHome = document.querySelector(".open-home");
const closeHome = document.querySelector(".close-home");
const myItems = document.querySelector(".items");
const myItem = document.querySelector(".item");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
// home
openHome.addEventListener("click", ()=>{
myItems.style.transform = "translateY(-280px)";
btnDown.style.opacity= "0.2";
btnUp.style.opacity= "1";
myItems.style.transition = "0.7s";
closeHome.style.zIndex = "1";
closeHome.style.opacity = "1";
});
closeHome.addEventListener("click", ()=>{
    myItems.style.transform = "translateY(280px)";
    btnDown.style.opacity= "1";
    btnUp.style.opacity= "1";
    myItems.style.transition = "0.7s";
    closeHome.style.zIndex = "-1";
    closeHome.style.opacity = "1";
});
// btn Up
btnUp.addEventListener("click", ()=>{
myItem.style.transform = "rotate(180deg)";
btnDown.style.opacity = "1";
btnUp.style.opacity = "0.2";
myItem.style.transition = "0.9s";
});
btnDown.addEventListener("click", ()=>{
    myItem.style.transform = "rotate(0deg)";
    btnDown.style.opacity = "0.2";
    btnUp.style.opacity = "1";
    myItem.style.transition = "0.9s";
    });
