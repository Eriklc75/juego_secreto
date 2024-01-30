let numeroSecreto=0;
let intentos = 0;
let listaSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste al número secreto en ${intentos} ${(intentos===1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //intento erroneo
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaSorteados);
    // si ya llegamos a nuestro número máximo
    if(listaSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else{
        //si el número generado está incluido en la lista

        if(listaSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','¡Bienvenido al juego secreto!');
    asignarTextoElemento('p',`Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //generar numero aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();