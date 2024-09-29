function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    if(confirm('Are you sure ? ')){

        document.getElementById('display').value = '';

    }  
    
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
