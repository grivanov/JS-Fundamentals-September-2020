function rounding(num, prec) {
    if (prec > 15) {
        prec = 15;
    }

    num = parseFloat(num.toFixed(prec));
    console.log(num);
}

rounding(3.1415926535897932384626433832795,2);