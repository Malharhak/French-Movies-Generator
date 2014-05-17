var generateTitle = function () {
	
	var phraseType = "dual";
	return phraseFunctions[phraseType]();
};


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



function setPhrase () {
	var phrase = generateTitle();
	console.log(phrase);
	$('#txt').text(phrase);

}
$(window).on('load', function () {
	$("#reload").on('click', function (event) {
		setPhrase();
	});
	setPhrase();
});