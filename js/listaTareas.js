//creamos una funcion que se llama asi porque ya esta en html ln 13
function agregarTarea(){
    
    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;
    
    //validamos que valor no sea vacio
    if(nuevaTareaTexto === ""){
        alert("Por favor ingrese una tarea");
        return;
    }

    //crear elemento en la lista
    let nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //crear boton eliminar
    let botonEliminar = document.createElement("Button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function(){nuevaTarea.remove();}

    //agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //agregar el elemento /la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea").value = " ";


}