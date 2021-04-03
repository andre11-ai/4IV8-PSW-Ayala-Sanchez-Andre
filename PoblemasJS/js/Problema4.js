function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calculo(){
    var valor0 = document.formulario.par1.value;
    var valor01 = document.formulario.par2.value;
    var valor02 = document.formulario.par3.value;
    var valor1 = document.formulario.examen_final.value;
    var valor2 = document.formulario.trabajo_final.value;
    var valor_a = parseInt(valor0);
    var valor_ab = parseInt(valor01);
    var valor_ac = parseInt(valor02);
    var valor_b = parseInt(valor1);
    var valor_c = parseInt(valor2);
    var promedio_examen = (valor_a + valor_ab + valor_ac)/3;
    var promedio = (promedio_examen * 0.55) + (valor_b * 0.30) + (valor_c * 0.15);

    document.formulario.promedio_final.value = promedio;
}

function borrar(){
    document.formulario.par1.value = "";
    document.formulario.par2.value = "";
    document.formulario.par3.value = "";
    document.formulario.examen_final.value = "";
    document.formulario.trabajo_final.value = "";
    document.formulario.promedio_final.value = "";
}