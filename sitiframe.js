linkURL = "index.htm"
	if (parent.document.URL) {
		callingURL = parent.document.URL
		if (callingURL.indexOf('?') != -1) {
			linkURL = callingURL.substring(callingURL.indexOf('?')+1,callingURL.length)
		}
	}
	
Tiemkoframe = new Array ("accueil.htm", "accueil.htm","avant.htm", "1986-1995.htm", "après1995.htm","ed.htm","jjt.htm","rc.htm","Deboco.htm")
		
function newIframe(ach) {
	content.document.location.href = Tiemkoframe[ach]

}

if (document.images) {
		Accueil = new Image
		Avant = new Image
		1986-1995 = new Image
		Après1995 = new Image

		Accueil.src = "Accueil.png"
		Avant.src = "Avant.png"
		1986-1995.src = "1986-1995.png"
		Après1995.src = "Après1995.png"
	
		Accueilx = new Image
		Avantx = new Image
		1986-1995x = new Image
		Après1995x = new Image

		Accueilx.src = "Accueilx.png"
		Avantx.src = "Avantx.png"
		1986-1995x.src = "1986-1995x.png"
		Après1995x.src = "Après1995x.png"

	}

