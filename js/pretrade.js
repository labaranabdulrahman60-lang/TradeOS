function submitPreTrade() {
  if (!tradeOS.sessionActive) {
    alert("Start a trading session first.");
    return;
  }

  const checks = document.querySelectorAll(".pretrade-check");
  let passed = true;

  checks.forEach(check => {
    if (!check.checked) passed = false;
  });

  if (!passed) {
    alert("Pre-trade checklist failed. Trade blocked.");
    return;
  }

  localStorage.setItem("pretradePassed", "true");
  alert("Pre-trade passed. You may trade.");
}
