var dinero_Jugadores=[];
var i=0;
var j=1;
let params = new URLSearchParams(location.search)
var cantJug = params.get('cantJug');
var jugaEmpieza = params.get('cantJug');
dinero_Jugadores[0]=cantJug;
var jcant=cantJug;
var contador=0;
var caracGanador=[0,0,0,0,0];
var caracTexGanador=[0,0,0,0,0];
var pagoJugadores=[0,0,0,0,0];
var cantMonedas = [200,200,200,200,200];
var moneda = [5000,2500,1000,500,100];
var intervalo;
var c=0;
var monedas = [1,5,10,25,50];
var k = 1;
var termina=false;
var devuelta = [0,0,0,0,0];
var dineroMas=[0,0,0,0,0];

// agregamos los datos del tablero
//creamos los datos de los nodos y los nodos

let listaTablero=new listaLigadaCircular();
for (let index = 0; index <=48; index++) {
    if (index>=0 && index<=36) {
        listaTablero.agregarAlFinal(new DatosEnNodo(1,36,index));
    }
    if (index>=37 && index<=42) {
        listaTablero.agregarAlFinal(new DatosEnNodo(1,3,index));
    }
    if (index>=43 && index<=48) {
        listaTablero.agregarAlFinal(new DatosEnNodo(1,2,index));
    }
}

//al darle chick al boton enviar en dinero se ejecuta esto, aqui unicamente se ingresa el valor a jugar, se ejecuta para los n jugadores.
function apostar() {
    if(cantJug>0){
        console.log(i);
        i=i+1;
        if(k==1)dinero_Jugadores[i]=document.getElementById("dineroDisponible").value;//se guarda el dinero de los jugadores en un vector    
        console.log(dinero_Jugadores[i]);
        if (dinero_Jugadores[i] % 100 ==0 && dinero_Jugadores[i] >= 2000){
            cantJug=cantJug-1;
            detCantidadDeMonedas(0,dinero_Jugadores[i],0);
            document.getElementById("formularioDinero").reset();
            document.getElementById("formularioDinero").style.visibility = "hidden";//se quita el formulario
            document.getElementById("dineroActual").innerHTML= dinero_Jugadores[i];//se muestra el monto en la parte inferior
            document.getElementById("boton_3").style.visibility="hidden";
            document.getElementById("boton_2").style.visibility="hidden";
            document.getElementById("boton_1").style.visibility="hidden";
            document.getElementById("boton_3").style.visibility="visible";
            document.getElementById("tablero").style.visibility="visible";
        }else{
            alert("Por favor escribe un número múltiplo de 100 y mayor que 2000"); dinero_Jugadores[i] = 0; i--; return;
        }     
    }else{  
        console.log("ya se guardaron todos" + cantJug+i)
        document.getElementById("tablero").style.visibility="hidden";
        //empieza la ruleta
        antRuleta();
    } 
}

function pasar() {
    if(cantJug>0){
        i=i+1;
        if(k==1)dinero_Jugadores[i]=document.getElementById("dineroDisponible").value;
        if (dinero_Jugadores[i] % 100 ==0 && dinero_Jugadores[i] >= 2000){    
        cantJug=cantJug-1;
        document.getElementById("formularioDinero").reset();
        console.log("se pasa al otro jugador");
        }else {alert("Por favor escribe un número múltiplo de 100 y mayor que 2000"); dinero_Jugadores[i] = 0; i--; return;} 
    }
    if (j<(jcant)) {
        document.getElementById("jugadorActual").innerHTML ="Jugador número: " + (i+1);//pasar de jugador
        j=j+1;
    }else{
        document.getElementById("jugadorActual").innerHTML = " ";
        alert("No va más");
        //empieza la ruleta
        antRuleta();
    }
}

function continuar() {
    if (k==1) {
        document.getElementById("formularioDinero").style.visibility = "visible";
        document.getElementById("dineroActual").innerHTML= " ";
        document.getElementById("boton_3").style.visibility="hidden";
        
    }
    document.getElementById("boton_2").style.visibility="visible";
    document.getElementById("boton_1").style.visibility="visible";
    document.getElementById("tablero").style.visibility="hidden";
    if (j<(jcant)) {
        document.getElementById("jugadorActual").innerHTML ="Jugador número" + (i+1);//pasar de jugador
        j=j+1;
        if (k==1) {
            document.getElementById("moneda1").innerHTML = 0;
            document.getElementById("moneda2").innerHTML = 0;
            document.getElementById("moneda3").innerHTML = 0;
            document.getElementById("moneda4").innerHTML = 0;
            document.getElementById("moneda5").innerHTML = 0;
        }      
    }else{
        alert("No va más");
        //empieza la ruleta
        antRuleta();
    }
}

function antRuleta() { //Oculta botones y tablero
    document.getElementById("lasMonedas").style.visibility="hidden";
    document.getElementById("tablero").style.visibility="hidden";
    document.getElementById("formularioDinero").style.visibility="hidden";
    document.getElementById("dineroActual").style.visibility="hidden";
    document.getElementById("boton_3").style.visibility="hidden";
    document.getElementById("boton_2").style.visibility="hidden";
    document.getElementById("boton_1").style.visibility="hidden"; 
    intervalo= setInterval(timer, 1000);
}

function timer(){ //Cuenta atrás del número ganador
    contador++;
    if(contador===4){
        clearInterval(intervalo);
        numeroGanador=Math.floor(Math.random() * (37 - 0) + 0);
        caracteristicasGanador(numeroGanador);//determina las caracteristicas del numero ganador

        document.getElementById("jugadorActual").innerHTML ="Y el número ganador es el:  "+caracTexGanador[0]+"<br> La fila: "+caracTexGanador[1]+
        "<br>La docena: "+ caracTexGanador[2]+"<br> La "+caracTexGanador[3]+"<br> La opción: "+caracTexGanador[4]+"<br> El color: "+caracTexGanador[5];
        calculaPagos();//determina los pagos que se deben realizar a cada jugador
        document.getElementById("boton_3").style.visibility="hidden";
        document.getElementById("boton_4").style.visibility="visible";

    }else{
        document.getElementById("jugadorActual").innerHTML =contador;
    }
}

function caracteristicasGanador(numero) {
    //posicion 0:numero, 1:fila, 2:docena, 3:mitad, 4:par/impar, 5:color.
    caracGanador[0]=numero;
    caracTexGanador[0]=caracGanador[0];
    //analiza la columna
    switch (numero%3) {
        case 0:
            caracGanador[1]=37;
            caracTexGanador[1]="1"
            break;
        case 2:
            caracGanador[1]=38;
            caracTexGanador[1]="2"
            break;
        case 1:
            caracGanador[1]=39;
            caracTexGanador[1]="3"
            break;
    }
    //analiza la docena
    if(numero>0 && numero<13){
        caracGanador[2]=40;
        caracTexGanador[2]="1"
    }else{
       if(numero>12 && numero<25){
        caracGanador[2]=41;
        caracTexGanador[2]="1"
        }else{
           if(numero>24 && numero<37){
            caracGanador[2]=42;
            caracTexGanador[2]="1"
            }   
        } 
    } 
    //analiza la mitad
    if (numero>0 && numero<19) {
        caracGanador[3]=43;
        caracTexGanador[3]="primera mitad"
    }else{
        caracGanador[3]=48;
        caracTexGanador[3]="segunda mitad"
    }
    //analiza la paridad
    if (numero%2===0) {
        caracGanador[4]=44;
        caracTexGanador[4]="par"
    }else{
        caracGanador[4]=47;
        caracTexGanador[4]="impar"
    }
    //analiza el color
    if (numero > 0 && numero < 11){
        if(numero%2===0){  
            caracGanador[5]=45;
            caracTexGanador[5]="negro"
        }else{
            caracGanador[5]=46;
            caracTexGanador[5]="rojo"
        }
    
    }else if (numero > 10 && numero < 19){
        if(numero%2===0){
            caracGanador[5]=46;  
            caracTexGanador[5]="rojo"
        }else{
            caracGanador[5]=45;
            caracTexGanador[5]="negro"
        }
    }else if (numero>18 && numero<29){
        if(numero%2===0){
            caracGanador[5]=45;
            caracTexGanador[5]="negro"
        }else{
            caracGanador[5]=46;
            caracTexGanador[5]="rojo"
        }
    }else if (numero>28 && numero<37){
        if(numero%2===0){
            caracGanador[5]=46; 
            caracTexGanador[5]="rojo"
        }else{
            caracGanador[5]=45;
            caracTexGanador[5]="negro"
        }
    }
}

function apuesta(x) { //Realiza la apuesta
    let opc= listaTablero.buscarNodo(x).retornaObjeto().retornaNumero();
    var opc1;
    if (opc>=0 && opc<=36) {
        opc1=opc;
    }else{
        switch (opc) {
            case 37:
                opc1="fila 3";
                break;
            case 38:
                opc1="fila 2";
                break;
            case 39:
                opc1="fila 1";
                break;
            case 40:
                opc1="primera docena";
                break;
            case 41:
                opc1="segunda docena";
                break;
            case 42:
                opc1="tercera docena";
                break;
            case 43:
                opc1="primera mitad";
                break;
            case 44:
                opc1="par";
                break;
            case 45:
                opc1="negro";
                break;
            case 46:
                opc1="rojo";
                break;
            case 47:
                opc1="impar";
                break;
            case 48:
                opc1="segunda mitad";
                break;
        }
    }
    var apue = prompt("Escribe cuánto dinero deseas apostara la opcion: " + opc1);
    var apuesta=parseInt(apue, 10); //convierte lo ingresado a número
    var confirma = confirm("¿Es correcto el valor ingresado?");
    console.log(apuesta);
    if(apuesta > 2000){
        alert("Por favor apuesta menos de 2000"); return;
    }else if(apuesta < 200){
        alert("Por favor apuesta más de 200"); return;
    }else if(confirma == false)return;
    else{
        if (apuesta<=dinero_Jugadores[i]){
            dinero_Jugadores[i]=dinero_Jugadores[i]-apuesta;
            detCantidadDeMonedas(0,dinero_Jugadores[i],0);
            document.getElementById("dineroActual").innerHTML=dinero_Jugadores[i];
            let nodo=listaTablero.buscarNodo(x);
            nodo.retornaObjeto().asignaApuestasRealizadas(0, (nodo.retornaObjeto().retornaApuestasRealizada(0))+1)//en cero se tiene la cantidad de apuestas realizadas a esa casilla
            nodo.retornaObjeto().asignaApuestasRealizadas(i,apuesta);//en esta posicion del vector queda realizada la apuesta del jugador i
        }else{
            alert("No tienes suficiente dinero para realizar esa apuesta, intenta nuevamente")
        }
    } 
}

function calculaPagos() { //Calcula... los pagos
    var n;
    for (let a = 0; a < caracGanador.length; a++) {//con esto se analiza cada caracteristica del numero ganador
        n=listaTablero.buscarNodo(caracGanador[a]);
        if(n.retornaObjeto().tieneApuestas()){//se mira cada nodo correspondiente a las caracteristicas del numero ganador
            pagar(n.retornaObjeto(),);
        }
    }
}

function pagar(datoNodo) { //Paga
    for (let b = 1; b <=dinero_Jugadores[0]; b++) {
        let factor=datoNodo.retornaValorMult();
        let apuesta=datoNodo.retornaApuestasRealizada(b)
        let pagar=apuesta*factor;
        pagoJugadores[b]=pagoJugadores[b]+pagar;
    }   
}

//aqui se determinan los valores del vector devuelta, que indica cuantas monedas de cada denominacion se debe entregar
function detCantidadDeMonedas(l, cambio, s){// l y s=0
    if (l <= 4 && termina === false) {
        while(s <= cambio - moneda[l]){
        if (cantMonedas[l]==0) {
            alert("Nos hemos quedado sin monedas. Lo sentimos.");window.location.href = "index.html";
        } 
            s = s + moneda[l];
            devuelta[l] = devuelta[l] + 1; 
            cantMonedas[l] = cantMonedas[l]-1;
        }
        if (s == cambio) {
            termina=true;
            mostrarMonedas(devuelta);
            return;
        }
        detCantidadDeMonedas(l+1,cambio,s);
        if (termina===false) {
            while(devuelta[l] > 0){
                devuelta[l] = devuelta[l] -1 ;
                cantMonedas[l] = cantMonedas[l]+1;
                s = s - moneda[l];
                detCantidadDeMonedas(l+1,cambio,s);
            }
        }
    }
}

function mostrarMonedas(monto) { //Muestra la cantidad de fichas de monedas
    document.getElementById("lasMonedas").style.visibility="visible";
        document.getElementById("moneda1").innerHTML = devuelta[4];
        document.getElementById("moneda2").innerHTML = devuelta[3];
        document.getElementById("moneda3").innerHTML = devuelta[2];
        document.getElementById("moneda4").innerHTML = devuelta[1];
        document.getElementById("moneda5").innerHTML = devuelta[0];
    devuelta=[0,0,0,0,0];
    s=0;
    termina=false;
}

function mostrarPagos(){ //Muestra el dinero con el que quedó cada jugador al sumarle lo que ganó
    c=c+1;
    if(c<=jcant){
        document.getElementById("lasMonedas").style.visibility="visible";
        document.getElementById("jugadorActual").innerHTML ="Al jugador "+c+" se le debe pagar: "+pagoJugadores[c]+" $" ;
        dinero_Jugadores[c] += pagoJugadores[c];
        detCantidadDeMonedas(0,dinero_Jugadores[c] ,0);
        document.getElementById("aa").style.visibility = "visible";
        document.getElementById("aa").innerHTML ="El jugador "+c+" queda con: "+dinero_Jugadores[c]+" $" ;
    }else{
        //sale de mostrar los pagos
        //aqui se debe dar la opcion para volver a apostar
        document.getElementById("boton_4").style.visibility="hidden";
        document.getElementById("lasMonedas").style.visibility="hidden";
        document.getElementById("aa").style.visibility = "hidden";
        for (var g = 1; g <= dinero_Jugadores.length; g++) { //Busca si algún jugador quedó con menos de 2000
            if (dinero_Jugadores[g] < 2000){
            alert("El jugador "+g+" no tiene suficiente dinero para continuar. Gracias por jugar");
            window.location.href = "index.html";return;
            }
        }
        if (confirm("¿Desea seguir jugando?")) {
            reiniciaApuestas();
        } else {
          window.location.href = "index.html"; //Termina la partida
        }
    }
}

function reiniciaApuestas(){ //Inicia una nueva ronda
    i=0;
    j=1;
    c=0;
    jcant=jugaEmpieza;
    cantJug = jugaEmpieza;
    contador=0;
    document.getElementById("boton_1").style.visibility="visible";
    document.getElementById("boton_2").style.visibility="visible";
    document.getElementById("jugadorActual").style.visibility="visible";
    document.getElementById("aa").style.visibility = "hidden";
    k++;
    document.getElementById("jugadorActual").innerHTML ="Jugador número: " + (i+1);
    document.getElementById("dineroActual").style.visibility="visible";
}   