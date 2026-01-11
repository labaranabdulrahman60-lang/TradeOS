// TradeOS Global State
let tradeOS = {
  sessionActive: false,
  sessionStart: null,
  sessionEnd: null
};

function startSession() {
  if (tradeOS.sessionActive) {
    alert("Session already active.");
    return;
  }

  tradeOS.sessionActive = true;
  tradeOS.sessionStart = new Date().toISOString();
  tradeOS.sessionEnd = null;

  localStorage.setItem("tradeOS", JSON.stringify(tradeOS));
  alert("Trading session started.");
}

function endSession() {
  if (!tradeOS.sessionActive) {
    alert("No active session.");
    return;
  }

  tradeOS.sessionActive = false;
  tradeOS.sessionEnd = new Date().toISOString();

  localStorage.setItem("tradeOS", JSON.stringify(tradeOS));
  alert("Trading session ended.");
}

// Load session on page refresh
const savedState = localStorage.getItem("tradeOS");
if (savedState) {
  tradeOS = JSON.parse(savedState);
}
