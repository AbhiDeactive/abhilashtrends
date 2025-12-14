function getStock() {
  const symbol = document.getElementById("symbol").value;
  document.getElementById("prediction").innerText =
    "Prediction for " + symbol + ": 📈 Uptrend (demo)";
}
