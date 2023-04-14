const nombre = document.createElement("label");
const input = document.getElementById("input");

/*Nombre en el formulario*/
nombre.textContent = `Tu nombre`

input.oninput = function() {
    nombre.innerHTML= `Gracias por participar <strong>${input.value}</strong>`
};

document.querySelector("#nombre").appendChild(nombre);