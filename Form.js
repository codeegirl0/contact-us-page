let toggleBtn= document.getElementsByClassName('fas')[0];
let navBar= document.getElementsByClassName('nav')[0];
toggleBtn.addEventListener('click', ()=>{
    const liste= "fa-list";
    const times="fa-times";
    navBar.classList.toggle("hide");
    navBar.classList.toggle("show");
    toggleBtn.classList.toggle(times);
    toggleBtn.classList.toggle(liste);
})  