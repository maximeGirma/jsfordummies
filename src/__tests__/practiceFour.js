/***
 *
 * Exercice 4 :
 *
 * Nos films sont maintenant dotés d'un age minimum (ageMin). Nous avons également trois jeunes gens qui souhaitent aller voir ces films.
 * Chaque personne est représentée par un objet stocké dans une constante (Voir plus bas).
 *
 * Ecrivez une fonction isSpectatorAllowed qui prend en premier argument un spectateur (exemple: ophelie) et en second un film.
 * Cette fonction doit qui renvoiyer un boolean
 * true si le spectateur a l'âge requis, false si il est trop petit.
 *
 * jest -t 'practiceFour'
 */

const OPHELIE = {
    name : "Jeremy",
    age: 17
}

const THORN = {
    name : "Jeremy",
    age: 21
}

const ARCHIBALD = {
    name : "Jeremy",
    age: 7
}

const MOVIES = [
    {
        title: "Kill Bill",
        director: "Quentin Tarantino",
        duration: 128.32,
        ageMin: 18
    },
    {
        title: "Mort un autre jour",
        director: "Some english dude",
        duration: 111.00,
        ageMin: 12
    }, {
        title: "Kill Bill 2",
        director: "Quentin Tarantino",
        duration: 150.83,
        ageMin: 18
    }, {
        title: "Titanic",
        director: "James Cameron",
        duration: 210.11,
        ageMin: 3

    }, {
        title: "LA LA LANDE",
        director: "Chais pas",
        duration: 123.72,
        ageMin: 3
    }, {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        duration: 145.32,
        ageMin: 18
    }, {
        title: "Le transporteur",
        director: "Pas Quentin Tarantino",
        duration: 158.32,
        ageMin: 16

    }, {
        title: "Nikita",
        director: "Luc Besson",
        duration: 138.32,
        ageMin: 18
    }, {
        title: "Django",
        director: "Quentin Tarantino",
        duration: 182.32,
        ageMin: 16
    }, {
        title: "Matrix",
        director: "Watcchoskiw",
        duration: 220.92,
        ageMin: 12
    }, {
        title: "The dark knight",
        director: "Christopher Nolan",
        duration: 177.92,
        ageMin: 12
    }, {
        title: "Nikita",
        director: "Luc Besson",
        duration: 111.11,
        ageMin: 18
    },
]


test('practiceFour', () => {
    expect(isSpectatorAllowed(OPHELIE, MOVIES[0])).toEqual(false);
    expect(isSpectatorAllowed(OPHELIE, MOVIES[1])).toEqual(true);
    expect(isSpectatorAllowed(THORN, MOVIES[4])).toEqual(true);
    expect(isSpectatorAllowed(ARCHIBALD, MOVIES[3])).toEqual(true);
    expect(isSpectatorAllowed(ARCHIBALD, MOVIES[1])).toEqual(false);
});
