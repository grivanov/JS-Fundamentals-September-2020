function movies(input) {

    class Movie {
        constructor(name, date, director) {
            this.name = name;
            this.date = date;
            this.director = director;

        }

        setName(inp) {
            this.name = inp;
        }

        setDate(inp) {
            this.date = inp;
        }

        setDirector(inp) {
            this.director = inp;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let newMovie = new Movie();

        if (input[i].includes('addMovie')) {
            let [, movieName] = input[i].split('addMovie ');
            newMovie.setName(movieName);
            //newMovie.name = movieName;

            for (let j = 0; j < input.length; j++) {
                if (input[j].includes(movieName)) {
                    if (input[j].includes('directedBy')) {
                        let [, value] = input[j].split(' directedBy ');
                        newMovie.setDirector(value);
                        //newMovie.director = value;
                    } else if (input[j].includes('onDate')) {
                        let [, value] = input[j].split(' onDate ');
                        newMovie.setDate(value);
                        // newMovie.date = value;
                    }
                }
            }

            let filledName = newMovie['name'] !== 'undefined';
            let filledDirector = newMovie['director'] !== 'undefined';
            let filledDate = newMovie['date'] !== 'undefined';

            if (filledName && filledDirector && filledDate) {
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