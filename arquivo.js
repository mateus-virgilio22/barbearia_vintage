const botao = document.querySelector(".btn-fixed");

window.addEventListener("scroll", function(event) {
    if(window.scrollY == 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

