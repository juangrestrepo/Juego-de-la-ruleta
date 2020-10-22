class listaLigadaCircular{
    constructor(){
        this.primero=null;
    }
    retornaPrimero(){return this.primero}

    agregarAlFinal(dato){
        let nuevo=new NodoDoble(dato)
        if(this.primero==null){
            this.primero=nuevo;
            nuevo.asignaLd(nuevo);
            nuevo.asignaLi(nuevo);
        }else{
            let nodoAuxiliar=this.primero;
            while (nodoAuxiliar.retornaLd()!==this.primero) {
                nodoAuxiliar=nodoAuxiliar.retornaLd();
            }
            nodoAuxiliar.asignaLd(nuevo);
            nuevo.asignaLi(nodoAuxiliar);
            nuevo.asignaLd(this.primero);
            this.primero.asignaLi(nuevo);
        }
    }

    buscarNodo(v){
        let auxiliar=this.primero;
        //!finDeRecorrido(auxiliar)
        while (auxiliar.retornaLd!==this.primero) {
            if((auxiliar.retornaObjeto().retornaNumero())===v){
                return auxiliar;
            }
            auxiliar=auxiliar.retornaLd();
        }
    }

    finDeRecorrido(x){
        if (x.retornaLd == this.primero){
            return true;
        } else return false;
    }
}