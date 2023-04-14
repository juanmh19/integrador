const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const img4 = document.querySelector("#img4")
const img5 = document.querySelector("#img5")
const img6 = document.querySelector("#img6")


    img1.addEventListener('load', ()=>{  
    setInterval(() => {
        img1.classList.add("ocultado");
        img2.classList.add("flex");
        img3.classList.add("ocultado");
        img4.classList.add("flex");
        img5.classList.add("ocultado");
        img6.classList.add("flex");
    }, 5000);
    setInterval(() => {
        img1.classList.remove("ocultado");
        img2.classList.remove("flex");
        img3.classList.remove("ocultado");
        img4.classList.remove("flex");
        img5.classList.remove("ocultado");
        img6.classList.remove("flex");
    }, 10000);
})
