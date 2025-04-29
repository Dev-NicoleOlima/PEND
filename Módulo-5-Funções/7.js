// 7. Shadowing Básico
let x = 10;
function shadowExample(x) {
    console.log("Parâmetro x:", x);
    console.log("Variável global x:", window.x); // para navegador
}
shadowExample(20);








