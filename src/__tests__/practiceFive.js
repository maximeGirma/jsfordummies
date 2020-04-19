/***
 *
 * Exercice 5 :
 *
 * Rajoutons de la complexité inutilement
 * Ecrivez une fontion getAllowedFilmsCount
 * Cette fonction doit prendre trois paramètres :
 * - La liste de films
 * - Un spectateur
 * - Le nom d'un réalisateur
 *
 * Elle doit retourner le nombre de films du réalisateur donné en paramètre que le spectateur à l'age de regarder.
 * Vous avez déjà écrit le code necessaire précedemment. Libre à vous de le réutiliser en faisant des copié-collé.
 *
 * jest -t 'practiceFive'
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

test('practiceFive', () => {
    expect(getAllowedFilmsCount(MOVIES, OPHELIE, "Quentin Tarantino")).toEqual(1)
    expect(getAllowedFilmsCount(MOVIES, OPHELIE, "Luc Besson")).toEqual(0)
    expect(getAllowedFilmsCount(MOVIES, THORN, "Quentin Tarantino")).toEqual(4)
    expect(getAllowedFilmsCount(MOVIES, ARCHIBALD, "Quentin Tarantino")).toEqual(0)
});

