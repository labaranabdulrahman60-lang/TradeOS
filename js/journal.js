// TradeOS Journal Logic

function saveTrade() {
  const setup = document.getElementById("setup").value;
  const entry = document.getElementById("entry").value;
  const stop = document.getElementById("stop").value;
  const target = document.getElementById("target").value;
  const emotion = document.getElementById("emotion").value;

  if (!setup || !entry || !stop || !target) {
    document.getElementById("status").innerText =
      "❌ Please fill in all required fields.";
    return;
  }

  const trade = {
    setup,
    entry,
    stop,
    target,
    emotion,
    timestamp: new Date().toISOString()
  };

  let trades = JSON.parse(localStorage.getItem("tradeOS_trades")) || [];
  trades.push(trade);

  localStorage.setItem("tradeOS_trades", JSON.stringify(trades));

  document.getElementById("status").innerText =
    "✅ Trade saved successfully.";

  // Reset form
  document.getElementById("setup").value = "";
  document.getElementById("entry").value = "";
  document.getElementById("stop").value = "";
  document.getElementById("target").value = "";
  document.getElementById("emotion").value = "Calm";
}
