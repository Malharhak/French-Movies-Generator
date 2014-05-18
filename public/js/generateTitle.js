var generateTitle = function () {
	
	var phraseType = rElem(phraseTypes);
	var p = phraseFunctions[phraseType]();
	return p.charAt(0).toUpperCase() + p.substr(1) + ".";
};







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
	$('#txt').text(phrase);

}
$(window).on('load', function () {
	compl_etat = generateWordTable(pre_compl_etat);
	$("#reload").on('click', function (event) {
		setPhrase();
	});
	setPhrase();
});