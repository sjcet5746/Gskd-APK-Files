function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
        addToHistory(expression + ' = ' + result);
    } catch(error) {
        document.getElementById('display').value = 'Error';
    }
}

function addToHistory(entry) {
    var historyDiv = document.getElementById('history');
    var p = document.createElement('p');
    p.textContent = entry;
    historyDiv.appendChild(p);
}
