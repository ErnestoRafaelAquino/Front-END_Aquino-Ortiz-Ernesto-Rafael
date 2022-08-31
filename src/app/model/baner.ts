export class Baner {
    id? : number;
    profesionH : string;
    acercaH : string;
    imgH : string;

    constructor(profesionH: string, acercaH: string, imgH: string){
        this.profesionH = profesionH;
        this.acercaH = acercaH;
        this.imgH = imgH;
    }
}
