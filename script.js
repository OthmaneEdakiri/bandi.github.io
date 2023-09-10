let bar = document.querySelector(".bar");
bar.addEventListener("click",()=>{
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("activenavbar");
    bar.classList.toggle("barColor")
})
let navbar =document.querySelectorAll(".navbar a");
navbar.forEach((e)=>{
    e.addEventListener("click",()=>{
        navbar.forEach((ele=>{
            ele.classList.remove("active");
        }))
        e.classList.add("active")
    })
})
let searsh =document.querySelector(".search");
searsh.addEventListener("click",()=>{
    let input_searsh=document.querySelector(".container_searsh input");
    let i = document.querySelector(".container_searsh i")
    input_searsh.classList.toggle("input_searsh")
    i.classList.toggle("fa-x")
    i.classList.toggle("fa-xmark")
    
})


let ourwork=document.querySelectorAll(".our-work ul li");
ourwork.forEach((e)=>{
    e.addEventListener("click",()=>{
        ourwork.forEach(ele=>{
            ele.classList.remove("listWork-active")
        })
        e.classList.add("listWork-active")
    })
})

