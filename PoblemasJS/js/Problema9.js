function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calculo(){
    var valor0 = document.formulario.hora.value;
    var valor1 = document.formulario.pago.value;
    var valor_a = parseInt(valor0);
    var valor_b = parseInt(valor1);
    
    if (valor_a > 48) {
        var trabajo = valor_a - 48;
        var total = 40 * valor_b + (8 * valor_b * 2) + (trabajo * valor_b * 3);
    } else {
        if (valor_a > 40) {
            var trabajo_alt = valor_a - 40;
            var total = 40 * valor_b + (trabajo_alt * valor_b * 2)
        } else {
            var total = valor_a * valor_b;
        }
    }

    document.formulario.sueldo.value = total + " $";
}

function borrar(){
    document.formulario.hora.value = "";
    document.formulario.pago.value = "";
    document.formulario.sueldo.value = "";
}