var personnes = [
	"trois",
	"plur"
];
var genders = [
	"masc",
	"fem"
];

var adverbes = [
	"pour",
	"avec",
	"sans",
	"pour",
	"depuis",
	"comme",
	"avant",
	"après",
	"maintenant",
	"soudain",
	"souvent",
	"tantôt",
	"toujours",
	"jamais"

];
var sujets = {
	trois : {
		masc : [
			"le temps",
			"le ruisseau",
			"ton corps",
			"l'oiseau",
			"le flot",
			"l'amour",
			"dimanche",
			"le pain",
			"le pré",
			"un chien",
			"un coeur",
			"pedobear"
		],
		fem : [
			"la pluie",
			"la maison",
			"la voiture",
			"la famille",
			"la petite",
			"la cabane",
			"la piscine",
			"une corniche",
			"une table",
			"une porte",
			"la fenêtre"
		]
	},
	plur : {
		masc : [
			"tes souvenirs",
			"les enfants",
			"ces gens",
			"nos chemins",
			"les dessins",
			"les oiseaux",
			"les poissons",
			"des gauffres"
		],
		fem : [
			"les couleurs",
			"les feuilles de l'automne",
			"les pommes",
			"tes histoires"
		]
	}
};

var epithetes = {
	trois : {
		masc : [

		],
		fem : [

		]
	},
	deux : {
		masc : [

		],
		fem : [

		]
	},
	plur : {
		masc : [

		],
		fem : [

		]
	}
};

var start_negations = [
	"ne"
];


var verbes_simple = {
	inf : [
		"vivre",
		"partir",
		"quitter"
	],
	trois : [
		"parle",
		"revient",

		"s'ouvre",
		"m'aime",
		"coule",
		"meurt"
	],
	deux : [
		"parles",
		"reviens",

		"vas bien",
		"prends le nord",


		"m'aimes",
		"meurs",
		"joues",
		"triches"
	],
	plur : [
		"reviennent",
		"partent",
		"s'aiment"
	]
};
var verbe_etat = {
	inf : [
		"etre"
	],
	trois : [
		"est"
	],
	deux : [
		"es"
	],
	plur : [
		"sont"
	]
};

var verbe_complement = {
	inf : [
		"quitter"
	],
	trois : [
		"quitte",
		"aime",
		"vend",
		"prend",
		"regarde",
		"suit",
		"fait",
		"vit"
	],
	deux : [
		"quittes",
		"suis",
		"aimes",
		"hais",
		"fais",
		"vis"
	],
	plur : [
		"quittent",
		"partent",
		"suivent",
		"aiment",
		"font",
		"vivent",
		"prennent",
		"regardent"
	]
};
var pre_compl_etat =  [
	["jeune", "jeunes"],
	["beau", "belle", "beaux", "belles"],
	["grand", "grande", "grands", "grandes"],
	["là"],
	["ici"],
	["là-bas"],
	["petit", "petite", "petits", "petites"],
	["loin"],
	["mort", "morte", "morts", "mortes"]
];
var compl_etat = [];
var last_negations = [
	"pas",
	"plus jamais",
	"plus",
	"qu'à l'arrivee de l'automne"
];

var fins = [
	"le soir",
	"tu es parti",
	"les fleurs tombent",
	"il est tard",
	"mais les oiseaux dorment encore"
];
var oneshots = [
	"le soir",
	"les feuilles tombent",
	"tu n'es plus là",
	"les arbres sont fleuris",
	"j'ai fait des crêpes",
	"l'échelle est tombée",
	"l'oiseau s'envole",
	"la fleur fâne",
	"il te regarde",
	"le jour se lève",
	"la porte se referme",
	"tu es parti",
	"il est revenu",
	"je suis là",
	"pars ne reviens pas trop tard",
	"il est l'heure",
	"viens avec nous",
	"partons loin",
	"reviens",
	"je t'attends",
	"c'est l'heure"
];
var oneshot_adverbe = [
	"trop tard",
	"tant pis",
	"c'était bien",
	"il reviendra",
	"peut-être",
	"je ne sais pas",
	"ça se pourrait",
	"c'est fini",
	"ce n'est pas grave",
	"je t'en veux",
	"je ne t'en veux pas",
	"ils s'aiment",
	"elle l'aime",
	"je t'aime",
	"j'ai faim",
	"il est parti",
	"partout",
	"après tout",
	"elle nous les montre",
	"à bientôt",
	"et vice et versa",
	"et je dis",
	"si seulement il mentait",
	"le bateau prend le large",
	"à condition d'analyser que l'absolu ne doit pas être annihilé",
	"avant de mourir",
	"après mourir",
	"toute ma jeunesse"
];

var dual1 = [
	"Apres la pluie, "
];




var liaisons = [
	"pour",
	"avec",
	"sans",
	"pour",
	"depuis",
	"comme",
	"avant",
	"après",
	"maintenant",
	"soudain",
	"souvent",
	"tantôt",
	"toujours",
	"jamais"
];
var sujets_compl = [
	"l'oiseau",
	"l'ocean",
	"le beau temps",
	"le dimanche",
	"le train",
	"le chemin",
	"ta vie",
	"nos vies",
	"les couleurs",
	"les feuilles",
	"les enfants",
	"leurs dessins",
	"une maison",
	"une place",
	"un bois",
	"les champs",
	"le temps",
	"le ciel",
	"les nuages",
	"le monde",
	"la mer",
	"le soleil",
	"le travail",
	"un souvenir",
	"une pensée",
	"une question",
	"une idée",
	"le doute",
	"notre joie",
	"la douleur",
	"le prix",
	"la fortune",
	"un garçon",
	"une fille",
	"les garçons",
	"les filles"
];


// TODO : negations ( "personne", )

function generateWordTable (list) {
	var nCompl = [];
	for (var i = 0; i < list.length; i++) {
		var m = list[i];
		var mot = {};
		if (m.length == 1) {
			mot.all = m[0];
		} else if (m.length == 2) {
			mot = {
				sing : m[0],
				plur : m[1]
			};
		} else {
			mot = {
				sing : {
					masc : m[0],
					fem : m[1]
				},
				plur : {
					masc : m[2],
					fem : m[3]
				}
			}
		}
		nCompl.push(new Mot(mot));
	}
	return nCompl;
}
