// TradeOS Journal Logic

function saveTrade() {
  if (!tradeOS.sessionActive) {
    alert("Start a trading session first.");
    return;
  }

  const trade = {
    pair: document.getElementById("pair").value,
    direction: document.getElementById("direction").value,
    result: document.getElementById("result").value,
    notes: document.getElementById("notes").value,
    time: new Date().toISOString()
  };

  let journal = JSON.parse(localStorage.getItem("tradeJournal")) || [];
  journal.push(trade);

  localStorage.setItem("tradeJournal", JSON.stringify(journal));

  alert("Trade saved.");
  document.getElementById("tradeForm").reset();
}
