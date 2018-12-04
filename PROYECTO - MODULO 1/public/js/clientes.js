//PRIMERO CARGAMOS LA FUNCION DE READY YA QUE LO CARGAREMOS EN EL HEAD;
$(document).ready(function () {
    let lista = $('#listaClientes');


    //CONSULTAR
    //Hago el get segun la consulta realizada en routes
    $.get('http://localhost:3000/clientes/', function (clientes) {
        clientes.forEach(cliente => {
            lista.append('<tr id="' + cliente.idclientes + '">'
                + '<th scope = "row">' + cliente.idclientes + '</th>'
                + '<td>' + cliente.nombre + '</td>'
                + '<td>' + cliente.apellido + '</td>'
                + '<td>' + cliente.telefono + '</td>'
                + '<td>' + cliente.email + '</td>'
                + '<td>' + cliente.ciudad + '</td>'
                + '<td><button class="btn btn-outline-danger eliminarCliente">X</button></td>'
                + '<td><button class="btn btn-outline-info modificarCliente">V</button></td>'
                + '</tr>');
        });
    });

    //Para eliminar de bb.dd
    lista.on('click', '.eliminarCliente', function () {
        let item = $(this);
        let id = item.parent().parent().attr('id');
        $.post('http://localhost:3000/clientes/delete',
            {
                id: id,
            },
            function (cliente) {
                if (cliente.affectedRows !== 0) {
                    item.parent().parent().remove();
                }
            });
    });


    //Para update de bb.dd
    lista.on('click', '.modificarCliente', function () {
        let item = $(this);
        let id = item.parent().parent().attr('id');
        let name = item.parent("td").prev("td").prev("td").prev("td").prev("td").prev("td").prev("td");

        name.html('"<input type="text" class="form-check-input cambiarNombre" placeholder="' + name.text() + '">"')

        $('.cambiarNombre').on('keyup', function () {
            if (event.keyCode == 13) {
                let nuevoNombre = $('.cambiarNombre').val();
                $.post('http://localhost:3000/clientes/update', {

                    id: id,
                    name: nuevoNombre
                },
                    function (cliente) {
                        if (cliente.affectedRows !== 0) {
                            name.html(nuevoNombre);
                        }
                    });
            }
        })

    });

});