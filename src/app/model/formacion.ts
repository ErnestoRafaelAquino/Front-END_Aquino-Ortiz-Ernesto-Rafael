export class Formacion {
    id?: number;
    contenidoM: string;
    imgM: string;

    constructor(contenidoM: string, imgM: string){
        this.contenidoM = contenidoM;
        this.imgM = imgM;
    }
}
