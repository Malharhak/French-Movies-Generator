var propositionTypes = [
	"simple", 		// Tu pars
	"lieu", 		// Tu aimes les oiseaux
	"etat", 		// Tu es partie
	"oneshot", 		// Te revoila  (une expression toute faite)
	"adverb"		// Avec toi
];

var propositionFuncs = {};
propositionFuncs.simple = function () {
	var suj = new Sujet();

	var sujet = suj.sujet;
	var verbe = rElem(verbes_simple[suj.personne]);

	var phrase = "";
	phrase += sujet;
	phrase += " ";
	phrase += verbe;
	return phrase;
};
propositionFuncs.lieu = function () {
	var suj = new Sujet();
	var sujet = suj.sujet;
	var verbe = rElem(verbe_complement[suj.personne]);

	var complement = rElem(sujets_compl);

	var phrase = sujet + " " + verbe + " " + complement;
	return  phrase
};
propositionFuncs.etat = function () {
	var suj = new Sujet();
	var sujet = suj.sujet;
	var verbe = rElem(verbe_etat[suj.personne]);

	var compl = rElem(compl_etat).get(suj.personne, suj.gender);

	var phrase = sujet +  " " + verbe + " " + compl;
	return phrase;
};
propositionFuncs.oneshot = function () {
	return rElem(oneshots);
};
propositionFuncs.oneshotAdv = function () {
	return rElem(oneshot_adverbe);
};

propositionFuncs.adverb = function () {
	var phrase = "";
	phrase += rElem(adverbes);
	phrase += " ";
	var personne = rElem(personnes);
	var gender = rElem(genders);
	var sujet = rElem(sujets[personne][gender]);

	phrase += sujet;

	phrase += ", ";

	phrase += rElem(sujets_compl);
	return phrase;
};
propositionFuncs.sujet = function () {
	return rElem(sujets_compl);
};

var generateProp = function () {
	var prop = rElem(propositionTypes);
	return propositionFuncs[prop]();
};