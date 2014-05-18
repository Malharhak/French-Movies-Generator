var phraseTypes = [
	"classic",
	"withLiaison",
	"dual",
	"veryLong"
];

var phraseFunctions = {};
phraseFunctions.imperative = function () {
	return this.classic();
};
phraseFunctions.classic = function () {
	var propType = rElem(propositionTypes);
	var prop = propositionFuncs[propType]();
	console.log(propType + " | " +  prop);
	return prop;
};
phraseFunctions.negative = function () {
	return this.classic();
};
phraseFunctions.noverb = function () {

};
phraseFunctions.reverse = function () {
	return this.classic();
};
phraseFunctions.dual = function () {
	var p1 = generateProp();
	var p2 = generateProp();
	var phrase = p1 + ", " + p2;
	return phrase;
};
phraseFunctions.veryLong = function () {
	var nbProps = Math.floor(Math.random() * 4) + 2;
	var phrase = "";
	for (var i = 0; i < nbProps; i++) {
		phrase += generateProp();
		phrase += ", ";
	}
	return phrase;
};

phraseFunctions.withLiaison = function () {
	var p1 = generateProp();

	var p2 = propositionFuncs.sujet();

	var phrase = p1 + ", " + rElem(liaisons) + " " + p2;
	return phrase;
};