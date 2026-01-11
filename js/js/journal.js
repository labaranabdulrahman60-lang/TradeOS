function saveTrade() {
  if (!tradeOS.sessionActive) {
    alert("No active session. Start a session first.");
    return;
  }

  const trade = {
    setup: document.getElementById("setup").value,
    entry: document.getElementById("entry").value,
    stop: document.getElementById("stop").value,
    target: document.getElementById("target").value,
    emotion: document.getElementById("emotion").value,
    time: new Date().toISOString()
  };

  let trades = JSON.parse(localStorage.getItem("trades")) || [];
  trades.push(trade);

  localStorage.setItem("trades", JSON.stringify(trades));

  document.getElementById("status").innerText =
    "Trade saved. Discipline enforced.";
}
