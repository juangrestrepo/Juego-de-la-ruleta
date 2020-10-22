var cantJug;
var dinero_Jugadores = [];
var i;

function creaVectorJugadores(x){
    cantJug=x;
    console.log(cantJug);
    i=0;
    dinero_Jugadores[i]=cantJug;
    location.href ="ruleta2.html?cantJug="+x;
}

/*

    //document.getElementById("seleccionJugadores").style.visibility = "hidden";
    //document.getElementById("seleccionJugadores").style.height = "10px";
    //document.getElementById("seleccionJugadores").style.marginTop = "0px";
    //document.getElementById("seleccionJugadores").style.padding = "0px";
    //document.getElementById("indicarApuestas").style.height = "340px";
    //document.getElementById("indicarApuestas").style.visibility = "visible";


function hacerApuestas(n,din){
 //codigo anterior
    confirm("¿Esta seguro de que no desea hacer mas apuestas?");
    if(confirm){
        let jugador = new apostador();
        vector[i]=jugador;
        i=i+1;
        if(i < cantJug){
            document.getElementById("formularioApuestas").reset();
        }else{
            document.getElementById("indicarApuestas").style.visibility = "hidden";
            document.getElementById("formularioApuestas").style.visibility = "hidden";
            //document.getElementById("opFormulario").style.height = "0px";
            document.getElementById("letrero").innerHTML = " ";
            alert("No va mas");
            document.getElementById("letrero").style.visibility = "visible";
            intervalo= setInterval(timer, 1000);
        }
    }   
}

function timer(){
    contador++;
    if(contador===4){
        clearInterval(intervalo);
        numeroGanador=Math.floor(Math.random() * (37 - 0) + 0);
        document.getElementById("letrero").innerHTML ="Y el numero ganador es "+numeroGanador;
        caracteristicasGanador(numeroGanador);
    }else{
        document.getElementById("letrero").innerHTML =contador;
    }
}

function caracteristicasGanador(x){
    let objNumero=new numGanador(x);
    let cualquier=objNumero.colorNumero;

}

function pasar(){
    confirm("¿Estás seguro de querer pasar del juego?");
}

function creaLista(){
    for (let index = 0; index < 37; index++) {
        const element = array[index];
        let oo = new nodoDoble();
    }
    
}

class numGanador{
    constructor(numero){
        this._valor=numero;

        if (numero%2===0) {
            this._parImparNumero="par"
        }else{
            this._parImpar="impar"
        }

        if (numero>0 && numero<19) {
            this._mitadNumero=1
        }else{
            this._mitadNumero=2
        }

        switch (numero) {
            case numero>0 && numero<13:
                this._docenaNumero=1
                break;
            case numero>12 && numero<25:
                this._docenaNumero=2
                break;
            case numero>24 && numero<37:
                this._docenaNumero=3
                break;
        }
        
        switch (numero) {
            case numero%3===0:
                this._filaNumero=3
                break;
            case numero%3===2:
                this._filaNumero=2
                break;
            case numero%3===1:
                this._filaNumero=1
                break;
        }

        if (numero > 0 && numero < 11){
            if(numero%2===0){  
                this._colorNumero="negro";  
            }else{
                this._colorNumero="rojo";
            }
        
        }else if (numero > 10 && numero < 19){
            if(numero%2===0){
                this._colorNumero="rojo";  
            }else{
                this._colorNumero="negro";
            }
        }else if (numero>18 && numero<29){
            if(numero%2===0){
                this._colorNumero="negro";  
            }else{
                this._colorNumero="rojo";
            }
        }else if (numero>28 && numero<37){
            if(numero%2===0){
                this._colorNumero="rojo"; 
            }else{
                this._colorNumero="negro";
            }
        }
        
        alert(this._colorNumero);
    }
    get colorNumero() {return this._colorNumero;}
}
class apostador{ 
    constructor(){
        this._dineroApostado=document.getElementById("dineroApostado1").value;
        this._numeroApostado=document.getElementById("numeroApostado1").value;
        this._dineroNumero=document.getElementById("dineroNumero1").value;
        this._docenaApostada=document.getElementById("docenaApostada1").value;
        this._dineroDocena=document.getElementById("dineroDocena1").value;
        this._filaApostada=document.getElementById("filaApostada1").value;
        this._dineroFila=document.getElementById("dineroFila1").value;
        this._colorApostado=document.getElementById("colorApostado1").value;
        this._dineroColor=document.getElementById("dineroColor1").value;
        this._parImparApostado=document.getElementById("parImparApostado1").value;
        this._dineroParImpar=document.getElementById("dineroParImpar1").value;
        this._mitadApostada=document.getElementById("mitadApostada1").value;
        this._dineroMitad=document.getElementById("dineroMitad1").value;
    }
    get dineroApostado() {return this._dineroApostado;}
    get numeroApostado(){return this._numeroApostado;}
    get dineroApostado() {return this._dineroApostado;}
}

class casillaTabla{
    constructor(){
    this._switch;
    this._ganancia;
    this._valor;  
    }
}

class nodoDoble{
    constructor(){
        this._ligaAnterior;
        this._dato;
        this._ligaSiguiente;
    }
    get retornaLigaDerecha() {return this._ligaSiguiente;}
    get retornaLigaIzquierda() {return this._ligaAnterior;}
}

class listaLigada{
    constructor(){
        this._primero=null;
    }
    get primero() {return this._primero;}

    finDeRecorrido(x){
        return (x.retornaLigaDerecha===this.primero);
    }

}
function zonaCero(paras) {
    
}*/
   
