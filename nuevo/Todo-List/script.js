const boton = document.getElementById("btn-add");
const lista = document.querySelector(".list-notes");

let eliminadas = 0;
let realizadas = 0;

function click() {
    boton.addEventListener("click", function () {
        const texto = document.getElementById("text").value;

        if (texto.trim() !== "") {
            // Creamos el elemento <li>
            const nueva = document.createElement("li");
            nueva.textContent = texto;

            // Creamos un div para los botones
            const divBotones = document.createElement("div");
            divBotones.classList.add("botones-container");

            // Botón de "Realizada"
            const agregar = document.createElement("button");
            agregar.textContent = "Realizada";
            agregar.classList.add("agregar-btn");

            // Botón de "Eliminar"
            const borrar = document.createElement("button");
            borrar.textContent = "Eliminar";
            borrar.classList.add("eliminar-btn");

            // Función para eliminar
            borrar.addEventListener("click", function () {
                lista.removeChild(nueva);
                eliminadas++;
                document.getElementById("eliminadas").textContent = eliminadas;
            });

            // Función para marcar como realizada
            agregar.addEventListener("click", function () {
                lista.removeChild(nueva);
                realizadas++;
                document.getElementById("realizadas").textContent = realizadas;
            });

            // Agregamos los botones al div
            divBotones.appendChild(agregar);
            divBotones.appendChild(borrar);

            // Agregamos el div de botones al <li>
            nueva.appendChild(divBotones);

            // Agregamos el <li> a la lista
            lista.appendChild(nueva);

            // Limpiamos el campo de texto
            document.getElementById("text").value = "";
        } else {
            alert("Campos sin llenar");
        }
    });
}

click();
