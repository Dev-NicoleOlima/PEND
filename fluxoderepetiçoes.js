function exercicio1() {
    const nomes = ["Nicole", "Laura", "Murilo", "Nath", "Julio"];
    for (let nome of nomes) {
        console.log(nome);
    }
}
// exercicio1() 


function exercicio2() {
    const numeros = [10, 20, 30, 40];
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    console.log("Soma total:", soma);
}
// exercicio2()

function exercicio3() {
    const pessoa = { nome: "Maria", idade: 15, cidade: "São Paulo" };
    for (let chave in pessoa) {
        console.log(`${chave}: ${pessoa[chave]}`);
    }
}
// exercicio3()


function exercicio4() {
    const objeto = { a: 1, b: 2, c: 3, d: 4 };
    let contador = 0;
    for (let chave in objeto) {
        contador++;
    }
    console.log("Número de propriedades:", contador);
}
// exercicio4()

function exercicio5() {
    const nomes = ["Ana", "João", "Paulo", "Lúcia"];
    let resultado = "";
    for (let nome of nomes) {
        resultado += nome + ", ";
    }
    console.log("Nomes concatenados:", resultado.slice(0, -2));
}
// exercicio5()


function exercicio6() {
    const valores = [10, "texto", true, null, { chave: "valor" }];
    for (let valor of valores) {
        console.log(`${valor} - Tipo: ${typeof valor}`);
    }
}
// exercicio6()

function exercicio7() {
    const pessoas = { João: 20, Ana: 30, Carlos: 25 };
    for (let nome in pessoas) {
        pessoas[nome]++;
    }
    console.log("Idades atualizadas:", pessoas);
}
// exercicio7()

function exercicio8() {
    const objeto = { marca: "Fiat", modelo: "Uno", ano: 2020 };
    let arrayDeStrings = [];
    for (let chave in objeto) {
        arrayDeStrings.push(`${chave}: ${objeto[chave]}`);
    }
    console.log(arrayDeStrings);
}
//exercicio8()

function exercicio9() {
    const valores = [1, 2, 2, 3, 4, 4, 5];
    const unicos = new Set();
    for (let valor of valores) {
        unicos.add(valor);
    }
    console.log("Valores únicos:", unicos.size);
}
// exercicio9(); 

//menuu

function menu() {
    console.log("MENU DE EXERCÍCIOS — Fluxo de Controle com for...of / for...in");
    console.log("1 - Listar nomes");
    console.log("2 - Somar valores");
    console.log("3 - Exibir propriedades de um objeto");
    console.log("4 - Contar propriedades de um objeto");
    console.log("5 - Concatenar nomes");
    console.log("6 - Imprimir tipos dos elementos");
    console.log("7 - Adicionar 1 ano às idades");
    console.log("8 - Converter objeto em array de strings");
    console.log("9 - Contar valores únicos");

    const escolha = prompt("Digite o número do exercício que deseja executar:");

    switch (escolha) {
        case "1": exercicio1(); break;
        case "2": exercicio2(); break;
        case "3": exercicio3(); break;
        case "4": exercicio4(); break;
        case "5": exercicio5(); break;
        case "6": exercicio6(); break;
        case "7": exercicio7(); break;
        case "8": exercicio8(); break;
        case "9": exercicio9(); break;
        default: console.log("Opção inválida.");
    }
}
menu();
