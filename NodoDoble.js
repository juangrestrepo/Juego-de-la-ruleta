class NodoDoble {
    constructor(objeto) {
        this.LigaIzquierda=null;
        this.Objeto=objeto;
        this.LigaDerecha=null;
    }
    retornaObjeto(){return this.Objeto}
    retornaLd(){return this.LigaDerecha}
    retornaLi(){return this.LigaIzquierda}
    asignaLd(Ld){this.LigaDerecha=Ld}
    asignaLi(Li){this.LigaIzquierda=Li}

}
