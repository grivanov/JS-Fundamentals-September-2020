function lower(inp) {
    let compare = inp.toUpperCase();

    if (compare === inp) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

lower('f')