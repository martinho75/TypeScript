import Carro from './Carro'
import {ConcessionariaInterface} from './ConcessionariaInterface'

export default class Concessionaria implements ConcessionariaInterface{
    private endereco: string = ""
    private listDeCarros: Array<Carro>

    public constructor(endereco:string, listaDeCarros:Array<Carro>){
        this.endereco = endereco
        this.listDeCarros = listaDeCarros
    }

    public fornecerEndereco():string{
        return this.endereco
    }

    public mostrarListaDeCarros():Array<Carro>{
        return this.listDeCarros
    }

    public fornecerHorarioDeFuncionaris():string{
        return "de segunda a sexta das 08:00 as 18:00  e sabado das 08:00 as 12:00"
    }
}