import{DaoInterface} from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface{

    nomeTabela: string ='tb_concessionaria'

    inserir(object: Concessionaria): boolean{
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Concessionaria): boolean{
        console.log('lógica para atualizar')
        return true
    }

    remover(id:number): Concessionaria{
        console.log('lógica para deletar')
        return new Concessionaria('', [])
    }
    
    selecionar(id:number): Concessionaria{
        console.log('logica para Select')
        return new Concessionaria('', [])
    }
    selecionarTodos(): [any]{
        console.log('logica para Select todos')
        return [new Concessionaria('', [])]
    }
}