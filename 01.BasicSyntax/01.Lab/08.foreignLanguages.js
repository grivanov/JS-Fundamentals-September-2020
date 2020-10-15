function languages(arg) {
    if (arg == "England" || arg == "USA") {
        console.log("English");
    } else if (arg == "Spain" || arg == "Argentina" || arg == "Mexico") {
        console.log("Spanish");
    } else {
        console.log("unknown");
    }
}

languages("Germany");