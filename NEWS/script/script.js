 const hamburger = document.querySelector('.hamburger');
 const menu = document.querySelector('.navbar');
 const search=document.querySelector(".search");
 const  magnifying =document.querySelector(".fa-magnifying-glass").addEventListener("click" , ()=>{
    if(search.style.display==='none'){
        
        search.style.display='flex'
    
    }else{
        search.style.display='none';
    }
 })
 hamburger.addEventListener("click" , ()=>{
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
    

    hamburger.classList.toggle('toggle')
  
 })