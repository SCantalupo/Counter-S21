// Crea il contatore
let counterValue = 0;

// Seleziona il contenitore principale
const app = document.getElementById('app');

// Crea un titolo
const title = document.createElement('h1');
title.textContent = 'COUNTER S2I';
title.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
title.style.color = 'white'; 
title.style.fontSize = '48px'; 
title.style.marginBottom = '20px'; 

// Crea il contenitore del contatore
const counterContainer = document.createElement('div');
counterContainer.className = 'counter-container';

// Crea il contatore
const counterDisplay = document.createElement('div');
counterDisplay.id = 'counter';
counterDisplay.textContent = counterValue;

// Crea i pulsanti
const decrementButton = document.createElement('button');
decrementButton.id = 'decrement';
decrementButton.textContent = '-';

const incrementButton = document.createElement('button');
incrementButton.id = 'increment';
incrementButton.textContent = '+';

// Funzione per aggiornare il contatore
function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;

    // Aggiungi animazione se il contatore è un multiplo di 10
    if (counterValue % 10 === 0) {
        counterDisplay.classList.add('scale-up');
        
        // Rimuovi la classe dopo l'animazione per permettere di riapplicarla
        setTimeout(() => {
            counterDisplay.classList.remove('scale-up');
        }, 400); 
    }
}

// Funzione per incrementare il contatore
incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounterDisplay();
});

// Funzione per decrementare il contatore
decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounterDisplay();
});

// Aggiungi il titolo al contenitore principale
app.appendChild(title);

// Aggiungi gli elementi al contenitore del contatore
counterContainer.appendChild(decrementButton);
counterContainer.appendChild(counterDisplay);
counterContainer.appendChild(incrementButton);

// Aggiungi il contenitore al DOM
app.appendChild(counterContainer);
