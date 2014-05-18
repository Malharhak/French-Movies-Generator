var Mot = function (infos) {
	this.all = infos.all;
	if (!this.all) {
		this.sing = infos.sing;
		this.plur = infos.plur;
	}
};

Mot.prototype.get = function (nombre, genre) {
	if (nombre == "deux" || nombre == "trois") {
		nombre = "sing";
	}
	if (this.all) {
		return this.all;
	} else if (typeof this[nombre] == "object") {
		return this[nombre][genre];
	} else {
		return this[nombre];
	}
};