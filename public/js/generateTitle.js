var generateTitle = function () {

	var phraseType = rElem(phraseTypes);
	var p = phraseFunctions[phraseType]();
	return p.charAt(0).toUpperCase() + p.substr(1) + ".";
};



var bgs = 5;
var fonts = 3;

var timer = 500;

var lastBg = 0;
var lastFont = 0;
var chooseBG = function () {
	var bg = Math.floor (Math.random() * bgs);
	$('#background').removeClass('bg' + lastBg);
	$('#background').addClass('bg' + bg);
	lastBg = bg;
};
var chooseFont = function () {
	var font = Math.floor (Math.random() * fonts);
	$('#txt').addClass('invisible');
	setTimeout (function () {
		$('#txt').removeClass('font' + lastFont);
		$('#txt').addClass('font' + font);
		lastFont = font;
		$('#txt').removeClass('invisible');
	}, timer);
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
	setTimeout (function () {
		$('#txt').text(phrase);
	}, timer);
	chooseBG();
	chooseFont();
}
$(window).on('load', function () {
	compl_etat = generateWordTable(pre_compl_etat);
	$("#reload").on('click', function (event) {
		setPhrase();
	});
	setPhrase();
});