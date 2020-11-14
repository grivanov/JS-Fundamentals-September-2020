function towns(inputArray) {

    // class Town {
    //     constructor(name, latt, long) {
    //         this.town = name;
    //         this.latitude = Number(latt).toFixed(2);
    //         this.longitude = Number(long).toFixed(2);
    //     }
    // }

    for (let el of inputArray) {
        let [name, latt, long] = el.split(' | ');
        latt = Number(latt).toFixed(2);
        long = Number(long).toFixed(2);
        let entry = {
            town: name,
            latitude: latt,
            longitude: long
        }
        console.log(entry);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);