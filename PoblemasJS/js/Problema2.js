function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);


}

function comision(){
    var valor = document.formulario.sueldo.value;
    var valor2 = document.formulario.ventas.value;
    var mes = parseInt(valor2)
    var result = parseInt(valor);
    var comision = (mes*result)*0.1;
    var total = result+comision;

    document.formulario.comisionn.value = "$"+comision;
    document.formulario.sueldoti.value = "$"+total;
}

function borrar(){
    document.formulario.comisionn.value = "";
    document.formulario.sueldoti.value = "";
    document.formulario.sueldo.value = "";
    document.formulario.ventas.value = "";
}