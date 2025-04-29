

function exercicio1() {
    const nomes = ["Nicole", "Laura", "Murilo", "Nath", "Julio"];
    for (let nome of nomes) {
        console.log(nome);
    }
}
exercicio1() 


function exercicio2() {
    const numeros = [10, 20, 30, 40];
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    console.log("Soma total:", soma);
}
exercicio2()

function exercicio3() {
    const pessoa = { nome: "Maria", idade: 15, cidade: "São Paulo" };
    for (let chave in pessoa) {
        console.log(`${chave}: ${pessoa[chave]}`);
    }
}
exercicio3()


function exercicio4() {
    const objeto = { a: 1, b: 2, c: 3, d: 4 };
    let contador = 0;
    for (let chave in objeto) {
        contador++;
    }
    console.log("Número de propriedades:", contador);
}
exercicio4()

function exercicio5() {
    const nomes = ["Ana", "João", "Paulo", "Lúcia"];
    let resultado = "";
    for (let nome of nomes) {
        resultado += nome + ", ";
    }
    console.log("Nomes concatenados:", resultado.slice(0, -2));
}
exercicio5()


function exercicio6() {
    const valores = [10, "texto", true, null, { chave: "valor" }];
    for (let valor of valores) {
        console.log(`${valor} - Tipo: ${typeof valor}`);
    }
}
exercicio6()

function exercicio7() {
    const pessoas = { João: 20, Ana: 30, Carlos: 25 };
    for (let nome in pessoas) {
        pessoas[nome]++;
    }
    console.log("Idades atualizadas:", pessoas);
}
exercicio7()

function exercicio8() {
    const objeto = { marca: "Fiat", modelo: "Uno", ano: 2020 };
    let arrayDeStrings = [];
    for (let chave in objeto) {
        arrayDeStrings.push(`${chave}: ${objeto[chave]}`);
    }
    console.log(arrayDeStrings);
}
exercicio8()

function exercicio9() {
    const valores = [1, 2, 2, 3, 4, 4, 5];
    const unicos = new Set();
    for (let valor of valores) {
        unicos.add(valor);
    }
    console.log("Valores únicos:", unicos.size);
}
exercicio9(); 



