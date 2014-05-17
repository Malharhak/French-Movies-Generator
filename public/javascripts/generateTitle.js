var personnes = [
	"trois",
	"deux",
	"plur"
];
var genders = [
	"masc",
	"fem"
];

var adverbes = [
	"apres",
	"depuis que",
	"avant",
	"rapidement",
	"lentement",
	"simplement",

];
var sujets = {
	trois : {
		masc : [
			"le temps",
			"le ruisseau",
			"ton corps"
		],
		fem : [
			"la pluie"
		]
	},
	deux : {
		masc : [
			"tu"
		],
		fem : [
			"tu"
		]
	},
	plur : {
		masc : [
			"tes souvenirs"
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


var verbes = {
	inf : [
		"vivre",
		"partir",
		"quitter"
	],
	trois : [
		"parle",
		"revient",
		"quitte",
		"est"
	],
	deux : [
		"parles",
		"reviens",
		"quittes",
		"vas bien"
	],
	plur : [
		"sont partis",
		"quittent"
	]
};
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

var dual1 = [
	"Apres la pluie, "
]

var generateTitle = function () {
	
	var phraseType = "dual";
	return phraseFunctions[phraseType]();
};

var phraseTypes = [
	"imperative",
	"classic",
	"negative",
	"noverb",
	"reverse"
];

var liaisons = [
	"pour",
	"avec",
	"de",
	"sans",
	"pour",
	"depuis"
];
var sujets2 = [
	"toi",
	"lui",
	"l'oiseau",
	"l'ocean",
	"le beau temps",
	"personne",
	"le dimanche",
	"le train",
	"le chemin",
	"ta vie",
	"nos vies"
];

var phraseFunctions = {};
phraseFunctions.imperative = function () {
	return this.classic();
};
phraseFunctions.classic = function () {
	var personne = rElem(personnes);
	var gender = rElem(genders);
	var sujet = rElem(sujets[personne][gender]);
	var verbe = rElem(verbes[personne]);
	var fin = rElem(fins);


	var phrase = "";
	phrase += sujet;
	phrase += " ";

	phrase += verbe;


	/*var addAdverbe = (Math.floor(Math.random() * 1) == 1);
	if (addAdverbe) {
		phrase += " ";
		var liaison = rElem(liaisons);
		phrase += liaison;
	}
	phrase += " ";
	var personne2 = rElem(personnes);
	var suj2 = rElem(sujets2);
	phrase += suj2;*/

	return phrase;
};
phraseFunctions.negative = function () {
	return this.classic();
};
phraseFunctions.noverb = function () {
	return this.classic();
};
phraseFunctions.reverse = function () {
	return this.classic();
};
phraseFunctions.dual = function () {
	var p = phraseFunctions.classic();
	var addAdverbe = (Math.floor (Math.random() * 4) == 1);
	var res = p.charAt(0).toUpperCase() + p.substr(1) + ", ";
	if (addAdverbe) {
		res += rElem(adverbes) + " ";
	}
	res += phraseFunctions.classic() + ".";
	return res;
}

var rElem = function (tbl) {
	return tbl[Math.floor(Math.random() * tbl.length)];
};
var addVirgule = function () {
	if (Math.floor(Math.random() * 2) == 1) {
		return ", ";
	} else {
		return " ";
	}
}
generateTitle();
