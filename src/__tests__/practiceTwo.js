/***
 *
 * Exercice 2 :
 *
 * Nous parvenons maintenant à trier notre tableau pour trouver les films de Tarantino. Mais ca ne sert pas à grand chose
 * Réecrivez une fonction qui marche avec tous les réalisateurs. Cette fonction doit s'appeler getMoviesByDirector
 * Elle doit prendre comme premier argument un tableau de films et en deuxième argument le nom du réalisateur.
 * Elle doit retourner un tableau contenant les films réalisés par le réalisateur passé en deuxième argument.
 *
 * jest -t 'practiceTwo'
 */


const MOVIES = [
    {
        title: "Kill Bill",
        director: "Quentin Tarantino",
    },
    {
        title: "Mort un autre jour",
        director: "Some english dude"
    }, {
        title: "Kill Bill 2",
        director: "Quentin Tarantino"
    }, {
        title: "Titanic",
        director: "James Cameron"
    }, {
        title: "LA LA LANDE",
        director: "Chais pas"
    }, {
        title: "Pulp Fiction",
        director: "Quentin Tarantino"
    }, {
        title: "Le transporteur",
        director: "Pas Quentin Tarantino"
    }, {
        title: "Nikita",
        director: "Luc Besson"
    }, {
        title: "Django",
        director: "Quentin Tarantino"
    }, {
        title: "Matrix",
        director: "Watcchoskiw"
    }, {
        title: "The dark knight",
        director: "Christopher Nolan"
    }
]


test('practiceTwo', () => {
    expect(getMoviesByDirector(MOVIES, "Quentin Tarantino")).toEqual([
        {
            title: "Kill Bill",
            director: "Quentin Tarantino"
        }, {
            title: "Kill Bill 2",
            director: "Quentin Tarantino"
        }, {
            title: "Pulp Fiction",
            director: "Quentin Tarantino"
        }, {
            title: "Django",
            director: "Quentin Tarantino"
        }
    ]);
    expect(getMoviesByDirector(MOVIES, "Christopher Nolan")).toEqual([
        {
            title: "The dark knight",
            director: "Christopher Nolan"
        }
    ]);
    // expect(getTarantinoFilms(2, 2)).toEqual(4);
});
