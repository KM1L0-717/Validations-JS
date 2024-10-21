document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementsByClassName("validationForm")[0];

    form.addEventListener("submit", function(event) {
        var inputs = form.getElementsByTagName("input");
        //var select = form.getElementsByTagName("select")[0];
        var selects = form.getElementsByTagName("select");

        var valido = true;

        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            var inputType = input.type;

            switch (inputType) {
                case "text":
                    var textRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
                    //if (isNaN(input.value) || input.value === "") {
                    if (input.value === "") {
                        alert("El campo '" + input.name + "' es obligatorio");
                        valido = false;
                    }
                    else if (input.value.trim().length < 3) {
                        alert("El campo '" + input.name + "' debe tener mínimo 3 caracteres");
                        valido = false;
                    }else if (!textRegex.test(input.value)) {
                        alert("El campo '" + input.name + "' requiere únicamente letras y espacios");
                        valido = false;
                    }
                    break;

                case "password":
                    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#*$])[A-Za-z\d#*$]{1,}$/;

                    if (input.value === "") {
                        alert("El campo '" + input.name + "' es obligatorio");
                        valido = false;
                    }
                    else if (input.value.trim().length < 8) {
                        alert("La contraseña debe tener al menos 8 caracteres");
                        valido = false;
                    }else if (!passwordRegex.test(input.value)) {
                        alert("La contraseña debe contener al menos una mayúscula, una minúscula, un número y alguno de los siguientes caracteres (#, $, *)");
                        valido = false;
                    }
                    break;

                case "number":
                    var numberRegex = /^[0-9]+$/;
                    //if (isNaN(input.value) || input.value === "") {
                    if (input.value === "") {
                        alert("El campo '" + input.name + "' es obligatorio");
                        valido = false;
                    }else if (input.value.trim().length < 8) {
                        alert("El campo '" + input.name + "' debe tener mínimo 8 caracteres");
                        valido = false;
                    }else if (!numberRegex.test(input.value)) {
                        alert("El campo '" + input.name + "' requiere únicamente números");
                        valido = false;
                    }
                    break;
                    
                case "email":
                    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    if (input.value === "") {
                        alert("El campo '" + input.name + "' es obligatorio");
                        valido = false;
                    }else if (!emailRegex.test(input.value)) {
                        alert("El correo electrónico no es válido. Ej: correo@ejemplo.com");
                        valido = false;
                    }
                    break;
                    
                case "date":
                    if (input.value === "") {
                        alert("Debes seleccionar una fecha para el campo " + input.name +".");
                        valido = false;
                    }
                    break;

                case "color":
                    if (input.value === "") {
                        alert("Por favor selecciona un color.");
                        valido = false;
                    }
                    break;

                case "range":
                    if (input.value === "") {
                        alert("Por favor selecciona un valor de rango.");
                        valido = false;
                    }
                    break;

                case "radio":
                    var radios = form.querySelectorAll('input[name="' + input.name + '"]');
                    var radioChecked = Array.from(radios).some(radio => radio.checked);
                    if (!radioChecked) {
                        alert("Debes seleccionar una opción de " + input.name + ".");
                        valido = false;
                    }
                    break;

                case "checkbox":
                    var checkboxes = form.querySelectorAll('input[name="' + input.name + '"]');
                    var checkboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
                    if (!checkboxChecked) {
                        alert("Debes seleccionar al menos una opción de " + input.name + ".");
                        valido = false;
                    }
                    break;
                    
                default:
                    break;
            }

            if (!valido) {
                event.preventDefault();
                return;
            }
        }

        for (var i = 0; i < selects.length; i++) {
            var select = selects[i]
            if (select.value === "") {
                alert("Por favor selecciona una opción del campo " + select.name + ".");
                valido = false;
            }
        }

        if (!valido) {
            event.preventDefault();
        }
    });
});
