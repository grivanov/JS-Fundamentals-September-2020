function movies(input) {

    for (let i = 0; i < input.length; i++) {
        let newMovie = {};

        if (input[i].includes('addMovie')) {
            let [, movieName] = input[i].split('addMovie ');
            newMovie.name = movieName;

            for (let j = 0; j < input.length; j++) {
                if (input[j].includes(movieName)) {
                    if (input[j].includes('directedBy')) {
                        let [, value] = input[j].split(' directedBy ');
                        newMovie.director = value;
                    } else if (input[j].includes('onDate')) {
                        let [, value] = input[j].split(' onDate ');
                        newMovie.date = value;
                    }
                }
            }

            if (newMovie.name && newMovie.director && newMovie.date) {
                console.log(JSON.stringify(newMovie));
            }
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);