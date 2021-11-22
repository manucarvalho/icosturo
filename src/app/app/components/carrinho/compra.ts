import { Cliente } from "../cadastrar-dialog/cliente";
import { Costureiro } from "../detalhe-modelo/costureiro";
import { Designer } from "../detalhe-modelo/designer";
import { Peca } from "../pecas/pecas-interface";

export interface Compra{
    compraId: number;
    valor: number;
    tamanho: string;
    designer: Designer;
    cliente: Cliente;
    costureiro: Costureiro;
    modelo: Peca;
}