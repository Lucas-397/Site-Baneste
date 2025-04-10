interface Cliente {
    id: string;
    cpfCnpj: string;
    rg?: string;
    dataNascimento: Date;
    nome: string;
    nomeSocial?: string;
    email: string;
    endereco: string;
    rendaAnual: number;
    patrimonio: number;
    estadoCivil: 'Solteiro' | 'Casado' | 'Viúvo' | 'Divorciado';
    codigoAgencia: number;
}


const cliente: Cliente = {
    id: '1',
    cpfCnpj: '193.264.067-33',
    rg: '4.507.672',
    dataNascimento: new Date('2024/04/10'),
    nome: 'Lucas Machado',
    email: 'lucas.machado@email',
    endereco: 'Rua. Padre Pires Carneiro',
    rendaAnual: 30000,
    patrimonio: 15000,
    estadoCivil: 'Solteiro',
    codigoAgencia: 21,
}