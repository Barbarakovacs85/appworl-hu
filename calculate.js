import { products } from './product.js';

function calculateTotal(price, itemId) {
    const festekQtyInput = document.getElementById(`festekQty${itemId}`);
    let festekQty = parseInt(festekQtyInput.value);

    
    if (festekQty < 0 || isNaN(festekQty)) {
        festekQty = 0;
        festekQtyInput.value = 0; 
    }

    const total = festekQty * price;

    document.getElementById(`festekTotal${itemId}`).textContent = `${total} Ft`;
    updateTotal();
}

function updateTotal() {
    let total = 0;
    for (const product of products) {
        const festekQtyInput = document.getElementById(`festekQty${product.id}`);
        let festekQty = parseInt(festekQtyInput.value);
        
        
        if (festekQty < 0 || isNaN(festekQty)) {
            festekQty = 0;
            festekQtyInput.value = 0; 
        }

        total += festekQty * product.price;
    }

    document.getElementById('total').textContent = `${total} Ft`;
}

export { calculateTotal };