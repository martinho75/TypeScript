import{DaoInterface} from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface{

    nomeTabela: string ='tb_concessionaria'

    inserir(object: Pessoa): boolean{
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Pessoa): boolean{
        console.log('lógica para atualizar')
        return true
    }

    remover(id:number): Pessoa{
        console.log('lógica para deletar')
        return new Pessoa('','')
    }
    
    selecionar(id:number): Pessoa{
        console.log('logica para Select')
        return new Pessoa('','')
    }
    selecionarTodos(): [any]{
        console.log('logica para Select todos')
        return [new Pessoa('','')]
    }
}