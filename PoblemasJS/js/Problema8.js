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
    var valor2 = document.formulario.num_3.value;
    var valor_a = parseInt(valor0);
    var valor_b = parseInt(valor1);
    var valor_c = parseInt(valor2);
    
    if (valor_a > valor_b) {
        if (valor_a > valor_c) {
            var num_3 = valor_a;
        }
        else{
            var num_3 = valor_c;
        }
    } else if (valor_a == valor_b == valor_c) {
        var num_3 = "Son iguales."
    } else {
        if (valor_b > valor_c) {
            var num_3 = valor_b;
        } else {
            var num_3 = valor_c;
        }
    }

    document.formulario.final_num.value = num_3;
}

function borrar(){
    document.formulario.num_1.value = "";
    document.formulario.num_2.value = "";
    document.formulario.num_3.value = "";
    document.formulario.final_num.value = "";
}