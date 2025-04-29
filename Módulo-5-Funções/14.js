// 14. Shadowing Médio
let mode = "light";
function toggleMode(mode) {
    let newMode = (mode === "light") ? "dark" : "light";
    console.log("Modo local:", newMode);
    return newMode;
}
console.log("Modo global:", mode);
toggleMode(mode);











