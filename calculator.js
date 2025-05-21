let currentDisplay = '';
const display = document.querySelector('#display');

// Button selection
const buttons = document.querySelectorAll('.btns');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;


        if (value === 'c') {
            currentDisplay = '';
        }

        else if (value === '=') {
            try {
                currentDisplay = eval(currentDisplay);
            } catch {
                currentDisplay = 'Error';
            }
        }

        else {
            currentDisplay += value;
        }

        display.value = currentDisplay;
    });
});
