/***
 *
 * Exercice 1 :
 *
 * Vous disposez d'une liste de films dans l'objet "movies".
 * Ecrivez une fonction nommée getTarantinoMovies qui prend en argument un tableau de films.
 * Cette fonction doit retourner un tableau des films réalisés par Tarantino (et uniquement ceux la.)
 *
 * Vous pouvez tester votre fonction avec la commande : jest -t 'practiceOne'
 */


const MOVIES = [
    {
        title: "Kill Bill",
        director: "Quentin Tarantino"
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
        title: "Le grand bleu",
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



test('practiceOne', () => {
    expect(getTarantinoMovies(MOVIES)).toEqual([
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
    // expect(getTarantinoFilms(2, 2)).toEqual(4);
});
