"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('lógica para atualizar');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('lógica para deletar');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('logica para Select');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('logica para Select todos');
        return [new Pessoa_1.default('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
