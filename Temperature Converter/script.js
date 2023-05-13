function convert() {
    const celsius = parseFloat(document.getElementById("celsiusInput").value);
    const fahrenheit = (celsius * 1.8) + 32;
    document.getElementById("result").innerHTML = `${celsius}&#8451; is ${fahrenheit.toFixed(2)}&#8457;`;
}