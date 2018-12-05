//PRIMERO CARGAMOS LA FUNCION DE READY YA QUE LO CARGAREMOS EN EL HEAD;
$(document).ready(function () {
    //FUNCION DE BOOTSTRAP PARA VALIDACION DE FORMULARIO
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

    let button = $('#enviar');

    //PARA HACER INSERT EN BB.DD
    //Para eliminar de bb.dd
    button.on('click', function () {
        let nombre = $('#validationCustom01').val();
        let apellido = $('#validationCustom02').val();
        let email = $('#validationCustomUsername').val();
        let telefono = $('#validationCustom03').val();
        let ciudad = $('#validationCustom04').val();
        console.log(nombre)
        if (nombre && apellido && email && telefono && ciudad){
            $.post('http://localhost:3000/clientes/add',
                {
                    name: nombre,
                    lastname: apellido,
                    phone: telefono,
                    email: email,
                    city: ciudad,
                },
                function (cliente) {
                });
        }
    });

});