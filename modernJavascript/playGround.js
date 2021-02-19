const searchInput = document.querySelector(".search");

const display = document.querySelector(".result");

const thanks = document.querySelector(".thanks")

// normal function that works perfectly

function show(){
    display.innerHTML = this.value;
    setTimeout(function(){
        thanks.innerHTML =`You have typed : ${this.value}`;
    },1000)
}

searchInput.addEventListener("keyup",show)