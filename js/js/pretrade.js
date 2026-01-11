function evaluatePreTrade() {
  if (!tradeOS.sessionActive) {
    alert("No active trading session. Start a session first.");
    return;
  }

  const plan = document.getElementById("rulePlan").checked;
  const risk = document.getElementById("ruleRisk").checked;
  const emotion = document.getElementById("ruleEmotion").checked;

  if (plan && risk && emotion) {
    document.getElementById("result").innerText =
      "Trade Approved. Execute with discipline.";
  } else {
    document.getElementById("result").innerText =
      "Trade Blocked. Conditions not met.";
  }
}
