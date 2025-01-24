function calculateFee() {
  var amount = document.getElementById('amount').value;
  if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid positive amount');
      return;
  }

  var fee = amount * 0.059 + 0.35;  // PayPal fee calculation
  var finalAmount = parseFloat(amount) + fee;

  // Display amounts
  document.getElementById('originalAmount').textContent = amount;
  document.getElementById('feeAmount').textContent = fee.toFixed(2);
  document.getElementById('finalAmount').textContent = finalAmount.toFixed(2);

  // Update PayPal link
  var paypalLink = "https://paypal.me/Liadshops/" + finalAmount.toFixed(2);
  document.getElementById('paypalLink').setAttribute("href", paypalLink);

  // Show result container
  document.getElementById('resultContainer').style.display = 'block';
}

function closeResult() {
  document.getElementById('resultContainer').style.display = 'none';
}

// Update datetime with timezone for Israel
setInterval(function() {
  var now = new Date();
  var datetime = now.toLocaleString("en-US", { timeZone: "Asia/Jerusalem" });
  document.getElementById('datetime').textContent = datetime;
}, 1000);
