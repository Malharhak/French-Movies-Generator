var personnes = [
	"trois",
	"plur"
];
var genders = [
	"masc",
	"fem"
];

var adverbes = [
	"apres",
	"avant",
	"avec",
	"sans",
	"pour"

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
			"dimanche"
		],
		fem : [
			"la pluie",
			"la maison",
			"la voiture",
			"la famille"
		]
	},
	plur : {
		masc : [
			"tes souvenirs",
			"les enfants"
		],
		fem : [
			"les couleurs",
			"les feuilles de l'automne"
			
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
		"partent"
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
		"hait",
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
		"quittent"
	]
};
var pre_compl_etat =  [
	["jeune", "jeunes"],
	["beau", "belle", "beaux", "belles"],
	["grand", "grande", "grands", "grandes"],
	["ouvert", "ouverte", "ouverts", "ouvertes"],
	["la"],
	["ici"]
];
var compl_etat = [];
var last_negations = [
	"pas",
	"plus jamais",
	"plus",
	"qu'a l'arrivee de l'automne"
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
	"tu n'es plus la",
	"les arbres sont fleuris",
	"la cabane de ta fille"
];

var dual1 = [
	"Apres la pluie, "
]




var liaisons = [
	"pour",
	"avec",
	"de",
	"sans",
	"pour",
	"depuis"
];
var sujets_compl = [
	"toi",
	"lui",
	"l'oiseau",
	"l'ocean",
	"le beau temps",
	"le dimanche",
	"le train",
	"le chemin",
	"ta vie",
	"nos vies",
	"les couleurs",
	"les feuilles de l'automne"
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