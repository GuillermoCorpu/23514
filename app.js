const $form=document.querySelector("#form")
$form.addEventListener('submit', validarFormulario)

function  validarFormulario (evento){
    evento.preventDefault();

    var elemento = document.getElementById("nombre");
        if (elemento.value.trim() === "" || elemento.value.length == 0 || elemento.value == null){
        alert("Nombre inválido. Por favor ingrese nombre completo");
        elemento.focus();
        return false;        
    }    

    var elemento = document.getElementById("mail");
    if (elemento.value.trim() === "" || elemento.value.length == 0 || elemento.value == null || (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|edu)\.(?:|com|ar)+$/.test(elemento.value)))){
        alert("Mail inválido. Por favor ingrese dirección de mail válida");
        elemento.focus();
        return false;        
    }    

    var elemento = document.getElementById("cel");
    if (elemento.value.trim() === "" || elemento.value.length == 0 || elemento.value == null || isNaN(elemento.value)){
        alert("Celular inválido. Por favor ingrese solamente números");
        elemento.focus();
        return false;        
    }    

    var elemento = document.getElementById("mensaje");
    if (elemento.value.trim() === "" || elemento.value.length == 0 || elemento.value == null){
        alert("Mensaje inválido. Por favor ingrese mensaje válido");
        elemento.focus();
        return false;        
    }    

    alert("Su mensaje fue enviado. Gracias")
    this.reset();
    return true;
}
