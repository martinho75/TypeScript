"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = "";
        this.endereco = endereco;
        this.listDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listDeCarros;
    };
    Concessionaria.prototype.fornecerHorarioDeFuncionaris = function () {
        return "de segunda a sexta das 08:00 as 18:00  e sabado das 08:00 as 12:00";
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
