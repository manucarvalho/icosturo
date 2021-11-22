import { Designer } from "../detalhe-modelo/designer";

export interface Peca {
    modeloId: number;
    cor: String;
    imageUm: String;
    tipo : String;    
    designer: Designer;
    valor: number;
    
}