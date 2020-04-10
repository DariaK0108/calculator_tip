// JavaScript source code
document.getElementById('container').onchange = function() {
    var bill = Number(document.getElementById('billTotal').value);
    /* alert(bill); */
    var tipPercent = document.getElementById('tipInput').value;
    var split = document.getElementById('splitInput').value;
    var tipValue = bill * tipPercent * 0.01;
    var newBillEach = (bill + tipValue)/split;
    var tipEach = tipValue/split;
    
    document.getElementById('tipOutput').innerHTML = tipPercent + "%";
    document.getElementById('splitOutput').innerHTML = split;
    document.getElementById('billPerPerson').innerHTML = "$" + newBillEach.toFixed(2);
    document.getElementById('tipPerPerson').innerHTML = "$" + tipEach.toFixed(2);
   
} 
