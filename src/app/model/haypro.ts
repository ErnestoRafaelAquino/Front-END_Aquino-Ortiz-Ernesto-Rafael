export class Haypro {
    id: number;
    tituloH: string;
    textoH: string;
    imgH: string;
    linkH: string;

    constructor(tituloH: string, textoH: string, linkH: string, imgH: string){
        this.tituloH = tituloH;
        this.textoH = textoH;
        this.linkH = linkH;
        this.imgH = imgH;
    }
}
