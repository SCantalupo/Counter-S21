// Crea il contatore
let counterValue = 0;

// Seleziona il contenitore principale
const app = document.getElementById('app');

// Funzione per creare un elemento DOM
function createElement(tagName, className = '', innerHTML = '') {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

// Crea un titolo
const title = createElement('h1', '', 'COUNTER S2I');
title.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
title.style.color = 'white'; 
title.style.fontSize = '48px'; 
title.style.marginBottom = '20px'; 

// Crea il contenitore del contatore
const counterContainer = createElement('div', 'counter-container');

// Crea il contatore
const counterDisplay = createElement('div', '', counterValue);
counterDisplay.id = 'counter';
counterDisplay.style.fontSize = '54px';  
counterDisplay.style.margin = '0 30px';  

// Crea i pulsanti con Event Delegation
const buttonWrapper = createElement('div', 'button-wrapper');
const decrementButton = createElement('button', '', '-');
decrementButton.id = 'decrement';
decrementButton.style.fontSize = '36px';  
decrementButton.style.padding = '15px';   

const incrementButton = createElement('button', '', '+');
incrementButton.id = 'increment';
incrementButton.style.fontSize = '36px';  
incrementButton.style.padding = '15px';   

// Aggiungi i pulsanti al wrapper
buttonWrapper.appendChild(decrementButton);
buttonWrapper.appendChild(counterDisplay);  
buttonWrapper.appendChild(incrementButton);

// Imposta stile per il contenitore del counter
buttonWrapper.style.display = 'flex';
buttonWrapper.style.alignItems = 'center'; 
buttonWrapper.style.justifyContent = 'center'; 

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

// Event Delegation per il wrapper dei pulsanti
buttonWrapper.addEventListener('click', (event) => {
    if (event.target.id === 'increment') {
        counterValue++;
    } else if (event.target.id === 'decrement') {
        counterValue--;
    }
    updateCounterDisplay();
});

// Aggiungi il titolo al contenitore principale
app.appendChild(title);

// Aggiungi gli elementi al contenitore del contatore
counterContainer.appendChild(buttonWrapper);

// Aggiungi il contenitore al DOM
app.appendChild(counterContainer);

// Visualizza il contatore al caricamento della pagina
updateCounterDisplay();  
