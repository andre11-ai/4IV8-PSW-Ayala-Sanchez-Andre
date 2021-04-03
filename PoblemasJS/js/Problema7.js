function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calculo(){
    var valor0 = document.formulario.num_1.value;
    var valor1 = document.formulario.num_2.value;
    var valor_a = parseInt(valor0);
    var valor_b = parseInt(valor1);
    
    if (valor_a == valor_b) {
        var num_3 = valor_a * valor_b;
    } else if (valor_a > valor_b) {
        var num_3 = valor_a - valor_b;
    } else {
        var num_3 = valor_a + valor_b;
    }

    document.formulario.final_num.value = num_3;
}

function borrar(){
    document.formulario.num_1.value = "";
    document.formulario.num_2.value = "";
    document.formulario.final_num.value = "";
}