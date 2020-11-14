function towns(inputArray) {

    class Town {
        constructor(name, latt, long) {
            this.town = name;
            this.latitude = Number(latt).toFixed(2);
            this.longitude = Number(long).toFixed(2);
        }

    }

    for (let el of inputArray) {
        let [name, latt, long] = el.split(' | ');
        let newTown = new Town(name, latt, long);
        return newTown;
    }

}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);