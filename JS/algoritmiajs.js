function problema1(){

    var p1_input = document.querySelector('#p1-input').value;
    //identiicar como dividir el texto escrito por espacios 
    var p1_array = p1_input.split(' ').reverse();
    //habia  aibah
    //construir la nueva cadena invertida

    var p1_res = '';

    p1_array.forEach(function(palabra, i){
        // si es el princio e o es el final de la cadena 
        //y no agregamos espacios en blanco
        if(i !=0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    })

document.querySelector('#p1-output').textContent = p1_res;
}