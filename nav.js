const btn=document.getElementById("toggle");
const menu=document.querySelector(".menu-items");
console.log(btn)
btn.addEventListener('click',()=>{
    console.log("clicked")
     if(menu.classList.contains('onclick'))
     {
         menu.classList.remove("onclick");
         btn.classList.add("rotate");
         btn.classList.remove("anti-rotate");


     }
    else
    {
        menu.classList.add("onclick");
        btn.classList.remove("rotate");
        btn.classList.add("anti-rotate");

    }

});