function employees(inputArray) {

    class Employee {
        constructor(name) {
            this.name = name;
            this.number = name.length;
        }

        printCard() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.number}`)
        }
    }

    for (let el of inputArray) {
        let newEmployee = new Employee(el);
        newEmployee.printCard();
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);