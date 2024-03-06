import { products } from '../calculate_proba2/product.js';

function calculateTotal(price, itemId) {
    const festekQty = parseInt(document.getElementById(`festekQty${itemId}`).value);
    const total = festekQty * price;

    document.getElementById(`festekTotal${itemId}`).textContent = `${total} Ft`;
    updateTotal();
}

function updateTotal() {
    let total = 0;
    for (const product of products) {
        const festekQty = parseInt(document.getElementById(`festekQty${product.id}`).value);
        total += festekQty * product.price;
    }

    document.getElementById('total').textContent = `${total} Ft`;

}

export { calculateTotal } ;