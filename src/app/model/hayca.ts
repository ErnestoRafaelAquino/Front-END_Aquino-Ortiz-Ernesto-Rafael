export class Hayca {
    id?:number;
    tituloH: string;
    textoH: string;
    imgH: string;

    constructor({ tituloH, textoH, imgH }: { tituloH: string; textoH: string; imgH: string; }) {
        this.tituloH = tituloH;
        this.textoH = textoH;   
        this.imgH = imgH;
    }

}
