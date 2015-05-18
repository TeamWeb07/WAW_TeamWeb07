function formChecker(form, vorname, nachname, titel, autor, isbn, jahr, auflage) {
/*
 * Nach der nächsten Prüfung alle rot markierte Felder in den normalen Zustand gebracht
 */

	var error = false;
	var counter = 1;
	
	document.getElementById(vorname.id).style.borderColor = "";
	document.getElementById(nachname.id).style.borderColor = "";
	document.getElementById(autor.id).style.borderColor = "";
	document.getElementById(isbn.id).style.borderColor="";
	document.getElementById(jahr.id).style.borderColor="";
	document.getElementById(auflage.id).style.borderColor="";
	

	var syntaxRule = /^[\sa-zA-ZßäöüÄÖÜ]+$/; 
	//Vornamen überprüfen
	if(!syntaxRule.test(vorname.value)) {
		counter = getMessage(vorname, counter);
	}

	if(!syntaxRule.test(nachname.value)) { 
	//Nachnamen überprüfen
		counter = getMessage(nachname, counter);
	}
	
	if(!syntaxRule.test(autor.value)) { 
	//Autor überprüfen
		counter = getMessage(autor, counter);
	}
	
	if(titel.value == "") { 
	//Titel überprüfen
		counter = getMessage(titel, counter);
	}
	
	syntaxRule = /^[0-9]+$/;
	if((!syntaxRule.test(isbn.value)) || (isbn.value.length != 13)) { 
	//ISBN überprüfen
		counter = getMessage(isbn, counter);
	}
	
	DatumAktuell = new Date(); //aktuelle Datum
	JahrAktuell = DatumAktuell.getFullYear();  
	//Jahr in einer Variable speichern
	if((!syntaxRule.test(jahr.value)) || (jahr.value.length != 4) || jahr.value < 0 || jahr.value > JahrAktuell) { 
	//überprüft das angegebene Jahr
		counter = getMessage(jahr, counter);
	}
	
	if(!syntaxRule.test(auflage.value) || auflage.value < 0) { 
	//entspricht Auflage den Syntaxregeln?
		counter = getMessage(auflage, counter);
	}
	
	if(counter == 1) {
		error = false;
	}
	else {
		error = true;
	}
	
	return !error
} 

	

/*
 * Markiert fehlerhafte Felder rot und setzt fokus auf ersten fehlerhaften Feld.
 */
function getMessage(bezeichnung, zaehler) {
	if(zaehler == 1) {
	alert(unescape("Einige Eingaben sind fehlerhaft. Bitte Überprüfen Sie ihre Eingaben"));
	bezeichnung.focus();
	zaehler++;
	}
	document.getElementById(bezeichnung.id).style.borderColor = "red"; //markiert die Felder rot
	return zaehler;	
}