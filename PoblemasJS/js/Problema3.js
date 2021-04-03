function validarn(e){
    var teclado = (document.all)?e.keycode:e.which
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var valor = document.formulario.cantidad.value;
    var result = parseInt(valor);
    var des = result*0.15;
    var total = result-des;

    document.formulario.descuento.value ="$" +total;
}

function borrar(){
    document.formulario.descuento.value = "";
    document.formulario.cantidad.value = "";
}