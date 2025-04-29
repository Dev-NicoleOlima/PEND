// 11. Média de Notas
function average(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}
console.log(average([8, 7.5, 9, 10]));

