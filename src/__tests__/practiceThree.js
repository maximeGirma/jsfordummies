/***
 *
 * Exercice 3 :
 *
 * Maintenant que nous pouvons trier les films par réalisateur nous voulons additionner la durée de tous leurs films
 * Pour cela créez une fonction getToTalMovieLengthByDirector qui prend en argument la liste de films et le nom du réalisateur
 * Cette fonction doit retourner la durée totale des films du réalisateur passé en paramètre
 *
 * Vous devez également réutiliser la fonction getMoviesByDirector de l'exercice précedent (Copiez-collez la)
 * Appelez la fonction getMoviesByDirector dans la fonction getToTalMovieLengthByDirector
 * Ainsi vous n'aurez pas à réecrire de code.
 *
 * jest -t 'practiceTree'
 */

const MOVIES = [
    {
        title: "Kill Bill",
        director: "Quentin Tarantino",
        duration: 128.32
    },
    {
        title: "Mort un autre jour",
        director: "Some english dude",
        duration: 111.00
    }, {
        title: "Kill Bill 2",
        director: "Quentin Tarantino",
        duration: 150.83
    }, {
        title: "Titanic",
        director: "James Cameron",
        duration: 210.11

    }, {
        title: "LA LA LANDE",
        director: "Chais pas",
        duration: 123.72
    }, {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        duration: 145.32
    }, {
        title: "Le transporteur",
        director: "Pas Quentin Tarantino",
        duration: 158.32
    }, {
        title: "Nikita",
        director: "Luc Besson",
        duration: 138.32
    }, {
        title: "Django",
        director: "Quentin Tarantino",
        duration: 182.32
    }, {
        title: "Matrix",
        director: "Watcchoskiw",
        duration: 220.92
    }, {
        title: "The dark knight",
        director: "Christopher Nolan",
        duration: 177.92
    }, {
        title: "Nikita",
        director: "Luc Besson",
        duration: 111.11
    },
]


test('practiceThree', () => {
    expect(getMoviesByDirector(MOVIES, "Quentin Tarantino")).toEqual([
        {
            title: "Kill Bill",
            director: "Quentin Tarantino",
            duration: 128.32
        },{
            title: "Kill Bill 2",
            director: "Quentin Tarantino",
            duration: 150.83
        }, {
            title: "Pulp Fiction",
            director: "Quentin Tarantino",
            duration: 145.32
        }, {
            title: "Django",
            director: "Quentin Tarantino",
            duration: 182.32
        },
    ]);

    expect(getMoviesByDirector(MOVIES, "Christopher Nolan")).toEqual([
        {
            title: "The dark knight",
            director: "Christopher Nolan",
            duration: 177.92
        }
    ]);

    expect(getToTalMovieLengthByDirector(MOVIES, "Quentin Tarantino")).toEqual(606.79)
    expect(getToTalMovieLengthByDirector(MOVIES, "Christopher Nolan")).toEqual(177.92)
    expect(getToTalMovieLengthByDirector(MOVIES, "Luc Besson")).toEqual(249.43)
    // expect(getTarantinoFilms(2, 2)).toEqual(4);
});
