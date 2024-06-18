export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  endereco: Endereco;
  }
  
  export interface Colaborador {
    id: number;
    nome: string;
    email: string;
    cpf: string;
    especialiadade: String;
    servico: string;
    avaliacao: number;
    endereco: Endereco;
  }
  
  export interface Servico {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    avaliacao:number;
    colaboradorId: number;
  }

  export interface Contratacao {
    id: number;
    usuarioId: number;
    servicoId: number;
    colaboradorId: number;
    data: string;
    status: string;
    preco: number;
    endereco: Endereco;
  }

  export class Endereco {
    rua: string;
    cep: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    complemento?: string; // Campo opcional
  
    constructor(rua: string, cep: string, numero: string, bairro: string, cidade: string, uf: string, complemento?: string) {
      this.rua = rua;
      this.cep = cep;
      this.numero = numero;
      this.bairro = bairro;
      this.cidade = cidade;
      this.uf = uf;
      this.complemento = complemento;
    }
  }