window.onload = function () {
    
    var prices = {
        1: 250, 
        2: 220,
        3: 240,
        4: 290,
        5: 320,
        6: 350,
        7: 400
    };

    function calculateTotal(price, itemId) {
        var festekQty = parseInt(document.getElementById("festekQty" + itemId).value);
        var festekPricePerUnit = price;
        if (festekQty < 0) {
            festekQty = 1;
            document.getElementById("festekQty" + itemId).value = festekQty;
        }
        var festekTotal = festekQty * festekPricePerUnit;
        document.getElementById("festekTotal" + itemId).innerHTML = festekTotal + " Ft";
        var total = 0;
        for (var i = 1; i <= 7; i++) {
            var festekTotalValue = parseInt(document.getElementById("festekTotal" + i).innerHTML);
            if (!isNaN(festekTotalValue)) {
                total += festekTotalValue;
            }
        }
        document.getElementById("total").innerHTML = total + " Ft";
    }
    for (var i = 1; i <= 7; i++) {
        document.getElementById("festekQty" + i).addEventListener("input", function (event) {
            var itemId = parseInt(event.target.id.replace("festekQty", ""));
            
            var price = prices[itemId];
            calculateTotal(price, itemId);
        });
    }
}

