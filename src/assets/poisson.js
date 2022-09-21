var k_total = 10; // number of times the event is repeated
var landa = 8;  // Promedian number of error expected in a given time (Landa symbol)
var exponential = 2.718281828;
var total = 0;
var numerator, denominator;

// Sumatorio de k terminos usando la formula de poisson

function poisson(k, landa) {
    exponentialPower = Math.pow(exponential, -landa); // negative power k
    landaPowerK = Math.pow(landa, k); // Landa elevated k
    numerator = exponentialPower * landaPowerK;
    denominator = fact(k); // factorial of k.

    return (numerator / denominator);
}

for (var i = 0; i < k_total; i++) {
    total += poisson(i, landa);
}

console.log("Total sum is " + total);

function fact(x) {
    if (x == 0) {
        return 1;
    }
    return x * fact(x - 1);
}