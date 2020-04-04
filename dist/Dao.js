"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('lógica para atualizar');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('lógica para deletar');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('logica para Select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('logica para Select todos');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
