// Función para cambiar entre login y registro
document.getElementById("toRegister").addEventListener("click", function() {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".register-container").style.display = "flex";
});

document.getElementById("toLogin").addEventListener("click", function() {
    document.querySelector(".register-container").style.display = "none";
    document.querySelector(".login-container").style.display = "flex";
});

// Función para registrar un nuevo usuario
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    
    if (username && password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        
        alert("Usuario registrado con éxito");
        
        document.querySelector(".register-container").style.display = "none";
        document.querySelector(".login-container").style.display = "flex";
    } else {
        alert("Por favor completa todos los campos.");
    }
});

// Función para iniciar sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.querySelector(".login-container").style.display = "none";
        document.querySelector(".navbar").style.display = "flex";
        document.querySelector(".vehicle-container").style.display = "flex";
        document.querySelector(".welcome-container").style.display = "block";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Función para cerrar sesión
document.getElementById("logoutBtn").addEventListener("click", function() {
    document.querySelector(".welcome-container").style.display = "none";
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".login-container").style.display = "flex";
});

// Función para ocultar todas las categorías de vehículos
function hideAllCategories() {
    document.getElementById('fourDoors').style.display = 'none';
    document.getElementById('twoDoors').style.display = 'none';
    document.getElementById('fourX4').style.display = 'none';
    document.getElementById('sports').style.display = 'none';
}

// Funciones para mostrar las categorías de vehículos correspondientes
document.getElementById("fourDoorsBtn").addEventListener("click", function() {
    hideAllCategories();
    document.getElementById('fourDoors').style.display = 'block';
});

document.getElementById("twoDoorsBtn").addEventListener("click", function() {
    hideAllCategories();
    document.getElementById('twoDoors').style.display = 'block';
});

document.getElementById("fourX4Btn").addEventListener("click", function() {
    hideAllCategories();
    document.getElementById('fourX4').style.display = 'block';
});

document.getElementById("sportsBtn").addEventListener("click", function() {
    hideAllCategories();
    document.getElementById('sports').style.display = 'block';
});
