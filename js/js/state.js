function getSession() {
  return JSON.parse(localStorage.getItem("tradeos_session")) || {
    active: false,
    trades: 0
  };
}

function saveSession(session) {
  localStorage.setItem("tradeos_session", JSON.stringify(session));
}

function startSession() {
  saveSession({ active: true, trades: 0 });
}

function endSession() {
  localStorage.removeItem("tradeos_session");
}
