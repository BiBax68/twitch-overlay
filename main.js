function showAlert(message) {
  const alertBox = document.getElementById('alert-box');
  alertBox.textContent = message;
  alertBox.style.opacity = 1;

  setTimeout(() => {
    alertBox.style.opacity = 0;
  }, 5000);
}


setTimeout(() => {
  showAlert("Nouveau follow : TheLegend27");
}, 3000);
