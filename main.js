let sky = document.querySelector(".sky")
let button = document.querySelector(".button")

function toggleDiaNoite(){
    if(sky.classList.contains("night")){
        sky.classList.remove("night")
        button.innerText = "Dia"
    }else {
        sky.classList.add("night")
        button.innerText = "Noite"
    }
}

button.addEventListener("click", toggleDiaNoite)
console.log("main rodando")