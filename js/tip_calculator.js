document.getElementById('tipPercentage').addEventListener('change', function() {
    const customTipContainer = document.getElementById('customTipContainer');
    if (this.value === 'custom') {
        customTipContainer.style.display = 'block';
    } else {
        customTipContainer.style.display = 'none';
    }
});

document.getElementById('calculateTip').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = document.getElementById('tipPercentage').value === 'custom' 
        ? parseFloat(document.getElementById('customTip').value) 
        : parseFloat(document.getElementById('tipPercentage').value);
    
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert('Please enter valid values');
        return;
    }

    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

    document.getElementById('billDisplay').textContent = billAmount.toFixed(2);
    document.getElementById('tipDisplay').textContent = tipAmount;
    document.getElementById('totalDisplay').textContent = totalAmount;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('billAmount').value = '';
    document.getElementById('tipPercentage').value = '0';
    document.getElementById('customTipContainer').style.display = 'none';
    document.getElementById('customTip').value = '';
    document.getElementById('billDisplay').textContent = '0.00';
    document.getElementById('tipDisplay').textContent = '0.00';
    document.getElementById('totalDisplay').textContent = '0.00';
});
