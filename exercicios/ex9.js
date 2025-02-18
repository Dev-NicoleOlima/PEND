function exibirMensagem() {
    var mensagem = "Amo meu mor";
    if (true) {
        let mensagem2 = "vou casar com o mor";
        console.log(mensagem); // ?
        console.log(mensagem2); // ?
    }
    console.log(mensagem); // ?
    console.log(mensagem2); // ?
}
exibirMensagem();
//aparecem todas as variaveis globais, menos a local, pois está dentro do bloco de programação e não pode ser exibida fora dele.
