let type = document.getElementById("typeSelect");
let login = document.getElementById("loginBtn");

login.addEventListener("click", (event) => {
    if(type.value === "profe") {
        window.location.href = "./profesor/home.html";
    } else if(type.value === "dpto") {
        window.location.href = "./departamento/home.html";
    } else if(type.value === "tech") {
        window.location.href = "./tecnologia/home.html";
    } else if(type.value === "compras") {
        window.location.href = "./compras/home.html";
    } else if(type.value === "soporte") {
        window.location.href = "./soporte/home.html";
    } else {
        alert("Debes escoger un rol");
    }
});