import {DaoInterface} from './DaoInterface'

export class Dao<T> implements DaoInterface<T>{

    nomeTabela: string =''

    inserir(object: T): boolean{
        console.log('lógica de insert')
        return true
    }

    atualizar(object: T): boolean{
        console.log('lógica para atualizar')
        return true
    }

    remover(id:number): T{
        console.log('lógica para deletar')
        return Object()
    }
    
    selecionar(id:number): T{
        console.log('logica para Select')
        return Object()
    }
    
    selecionarTodos(): [T]{
        console.log('logica para Select todos')
        return [Object()]
    }
}