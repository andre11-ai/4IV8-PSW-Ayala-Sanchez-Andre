function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calculo(){
    var valor0 = document.formulario.año_actual.value;
    var valor1 = document.formulario.año_nacer.value;
    var valor_a = parseInt(valor0);
    var valor_b = parseInt(valor1);
    var final = valor_a - valor_b;
    if (valor_a <= valor_b) {
        window.alert("Digite un año válido, por favor.");
    } else {
        document.formulario.final.value = final + " años";
    }
}

function borrar(){
    document.formulario.año_actual.value = "";
    document.formulario.año_nacer.value = "";
    document.formulario.final.value = "";
}