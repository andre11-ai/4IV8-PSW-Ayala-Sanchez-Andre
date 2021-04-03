function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calculo(){
    var valor0 = document.formulario.num_h.value;
    var valor1 = document.formulario.num_m.value;
    var valor_a = parseInt(valor0);
    var valor_b = parseInt(valor1);
    var pokolonie = valor_a + valor_b;
    var porcentaje_m = (valor_a/pokolonie) * 100;
    var porcentaje_h = (valor_b/pokolonie) * 100;

    document.formulario.final_h.value = porcentaje_h + " %";
    document.formulario.final_m.value = porcentaje_m + " %";
}

function borrar(){
    document.formulario.num_h.value = "";
    document.formulario.num_m.value = "";
    document.formulario.final_m.value = "";
    document.formulario.final_h.value = "";
}