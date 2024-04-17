document.addEventListener('DOMContentLoaded', function() {
    const costInput = document.getElementById('cost-per-liter');
    const litersInput = document.getElementById('liters-purchased');
    const calculateBtn = document.getElementById('calculate-btn');
    const totalCostDisplay = document.getElementById('total-cost');
  
    calculateBtn.addEventListener('click', function() {
      const costPerLiter = parseFloat(costInput.value);
      const litersPurchased = parseFloat(litersInput.value);
      const totalCostAED = costPerLiter * litersPurchased;
  
      totalCostDisplay.textContent = `Total cost: AED ${totalCostAED.toFixed(2)}`;
    });
  });