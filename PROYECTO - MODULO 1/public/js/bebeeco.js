//PRIMERO CARGAMOS LA FUNCION DE READY YA QUE LO CARGAREMOS EN EL HEAD;
$(document).ready(function () {
        $('#contenedor').on('click', '.open', function(){
            // Para poder seleccionar cada popup diferente segun el boton
            let id = $(this).attr('id');
            let popup = $(`#popup${id}`);
            let overlay = $(`#popup-overlay${id}`);
            popup.fadeIn();
            overlay.fadeIn('slow');
            //Devuelve el height del selector, en este caso de la pantalla desde donde se visualice
            overlay.height($(window).height());
            return false;
        });
     
        $('#contenedor').on('click', function(){
            $('.popup').fadeOut('slow');
            $('.popup-overlay').fadeOut('slow');
            return false;
        });

});