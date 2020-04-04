//import { ConcessionariaDao } from './ConcessionariaDao'
//import {PessoaDao}  from './PessoaDao'

import Concessionaria from'./Concessionaria'
import Pessoa from './Pessoa'
import {Dao} from './Dao'

//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()

let concessionaria = new Concessionaria('', [])
let  pessoa = new Pessoa('','')

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
dao3.inserir(concessionaria) 