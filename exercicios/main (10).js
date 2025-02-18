function testeEscopo() {
    var a = 10;
    if (true) {
        let b = 20;
        console.log(a); // ?
        console.log(b); // ?
    }
    console.log(a); // ?
    console.log(b); // ?
}
testeEscopo();

// A variável b não aparecerá no console pois foi declarada como let, e executada fora do bloco em que foi declarada (se fosse declarada com Var, o codigo funcionaria).