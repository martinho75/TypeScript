import Veiculo from './Veiculo'

export default class Carro extends Veiculo{
    private numeroDePortas: number =0
   
    public constructor(modelo:string, numeroDePortas:number){
        super()
       this.modelo = modelo
       this.numeroDePortas = numeroDePortas
    }

}