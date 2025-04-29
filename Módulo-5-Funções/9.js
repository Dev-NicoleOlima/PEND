// 9. Conversão de Temperatura
function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(toFahrenheit(0));   // 32
console.log(toCelsius(32));     // 0

