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

ChgImg = new Array ("Accueil.png", "Accueilx.png", "Avant.png", "Avantx.png", "1986-1995.png", "1986-1995x.png", "après1995.png", "après1995x.png","ed.htm","jjt.htm","rc.htm","Deboco.htm")

function rollover(avtx)
		{
	
			document.location.src = ChgImg[avtx]
	
		}
function mouseaway(avt)
		{
	
			document.location.src = ChgImg[avt]
	
		}
