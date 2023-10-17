//declarando variaveis
let valor1, valor2, operador , resultados;

//solicitando valores ao usuario
valor1=parseFloat(prompt("digitie o valor1"));
valor2=parseFloat(prompt("digite o valor2"));
operador= prompt("digite o operador");

//fazendo a operação
switch (operador) {
    resultados =  valor1 + valor2;
    break;
    case "-":
        resultado = valor1 - valor2;
    break;
    case "*":
        resultado = valor1 * valor2;
    break;
    case "/":
        resultado = valor1 / valor2;
    break;
    default:
        console.log("operador invalido");
        return;
        // Exibe o resultado
    console.log("O resultado é: " + resultado);
    if (operador === "/") {
  console.log("Sobra: " + sobra);
}

}