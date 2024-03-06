import { products } from './product.js';
import { calculateTotal } from './calculate.js';

function collectModule(){
    for (const product of products) {
        const row = document.createElement('tr'); 
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price} Ft</td>
            <td><input type="number" id="festekQty${product.id}" value="0"></td>
            <td id="festekTotal${product.id}">0 Ft</td>`;

        document.querySelector('#productTableBody').appendChild(row);

        const input = document.getElementById(`festekQty${product.id}`);
        input.addEventListener('input', () => calculateTotal(product.price, product.id));
    }
}
collectModule();