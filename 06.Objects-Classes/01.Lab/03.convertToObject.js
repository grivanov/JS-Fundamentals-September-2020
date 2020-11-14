function convert(inputJSON) {
    let person = JSON.parse(inputJSON);

    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);

    }
}

let input = '{"name": "George", "age": 40, "town": "Sofia"}';

convert(input);