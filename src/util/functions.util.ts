export function arePrimeFactors(n:number, factors:number[]) {
    let prod = 1;
    factors.forEach( (f) => {
        if (!isPrime) { return false; }
        prod = prod * f;
    });
    return prod === n;
}

function isPrime(n:number) {
    if (n <= 1) { return false; }
    if (n === 2) { return true; }
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) { return false; }
    }
    return true;
}