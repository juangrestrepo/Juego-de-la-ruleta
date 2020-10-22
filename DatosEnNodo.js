class DatosEnNodo{
    constructor(tipo, valor, numero){
        this.Tipo = tipo;
        this.ValorMult = valor;
        this.Numero = numero;
        this.ApuestasRealizada = [0,0,0,0,0];
    }
    retornaTipo(){return this.Tipo}
    retornaValorMult(){return this.ValorMult}
    retornaNumero(){return this.Numero}
    retornaApuestasRealizada(j){return this.ApuestasRealizada[j]}
    asignaApuestasRealizadas(i,a){this.ApuestasRealizada[i]=a}

    tieneApuestas(){
        for (let index = 0; index < 4; index++) {
            const element = this.ApuestasRealizada[index];
            if (element!=0) {return true}         
        }
        return false;
    }
}
