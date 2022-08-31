export class Hayki {
    id?: number;
    nombreH: string;
    porcentajeH: number;
    imgH: string;

    constructor({ nombreH, porcentajeH, imgH }: { nombreH: string; porcentajeH: number; imgH: string; }){
        this.nombreH = nombreH;
        this.porcentajeH = porcentajeH;
        this.imgH = imgH;
    }
}
