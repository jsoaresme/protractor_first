//Helper é o que permite manipular os elementos no navegador
const helper = require("protractor-helper");

//Classe usada para construir os elementos que são utilizado no page-objects
class Google {
    //Constructor é a função responsavel para criar os elementos e tornar disponivel para serem usados
    constructor() {
        //Está sendo criada a variavel search e sendo atribuida o elemento que foi mapeado utilizando o xpath no html
        this.search = element(by.xpath("//input[@class='gLFyf gsfi']"));
    }
}

//Está tornando possivel essa class ser acessivel por qualquer arquivo que faço o require desse module
module.exports = Google;