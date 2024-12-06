// Funcția principală care gestionează operațiile
function calculate(operation) {
    // Citește valorile din câmpurile de input
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultField = document.getElementById("result");

    // Resetează stilul pentru rezultat
    resultField.style.color = "black";

    // Verifică dacă câmpurile sunt goale
    if (document.getElementById("num1").value === "" || document.getElementById("num2").value === "") {
        resultField.textContent = "Te rog să completezi ambele câmpuri!";
        resultField.style.color = "red";
        return;
    }

    // Verifică dacă valorile introduse sunt valide
    if (isNaN(num1) || isNaN(num2)) {
        resultField.textContent = "Te rog să introduci două numere valide!";
        resultField.style.color = "red";
        return;
    }

    // Variabilă pentru a stoca rezultatul
    let result;

    // Determină operația pe baza butonului apăsat
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            // Verifică împărțirea la zero
            if (num2 === 0) {
                resultField.textContent = "Împărțirea la zero nu este permisă!";
                resultField.style.color = "red";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultField.textContent = "Operație necunoscută!";
            resultField.style.color = "red";
            return;
    }

    // Afișează rezultatul în zona desemnată
    resultField.textContent = `Rezultat: ${result}`;
    resultField.style.color = "green";
}
