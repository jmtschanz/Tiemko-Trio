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

ChangeImgMenu = new Array ("Accueilx.png", "Avantx.png", "1986-1995x.png", "Après1995x.png")

function ChangeImg(x) {
	document.location.src = ChangeImgMenu[x]
   }
