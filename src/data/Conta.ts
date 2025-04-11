export interface Conta {
    id: string;
    cpfCnpjCliente: string;
    tipo: 'corrente' | 'poupanca';
    saldo: number;
    limiteCredito: number;
    creditoDisponivel: number;
}
export const contaTeste:Conta = {
    id: '1',
    cpfCnpjCliente: '193.264.067-33',
    tipo: 'poupanca',
    saldo: 1300,
    limiteCredito: 500,
    creditoDisponivel: 450,
}

