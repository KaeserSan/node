
function Beatle = function( name, datebirth, icon){
	var datePieces = datebirth.split('/');
	var day = parseInt(datepieces[2],10);
	var month = parseInt(datepieces[1],10)-1;
	var year = parseInt(datepieces[0],10);

	this.name = name;
	this.birthdate = day+'/'+month+'/'+year;
	this.icon = icon;
}


Beatle.prototype.getAge = function(){}