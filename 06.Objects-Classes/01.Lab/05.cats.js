function cats(input) {
    class catsClass {
        constructor(catName, catAge) {
            this.catName = catName;
            this.catAge = catAge;
        }

        meow() {
            console.log(`${this.catName}, age ${this.catAge} says Meow`);
        }
    }

    for (let el of input) {
        let [cat, name] = el.split(' ');
        let myCat = new catsClass(cat, name);
        myCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5'])