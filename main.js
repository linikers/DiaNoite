let sky = document.querySelector(".sky")
let button = document.querySelector(".button")

let horaAtual = new Date().getHours()

if(sky.classList.contains("night") && horaAtual > 6 && horaAtual < 19){
    sky.classList.remove("night")
    button.innerText = "Dia"
}

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
