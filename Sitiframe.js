linkURL = "index.htm"
	if (parent.document.URL) {
		callingURL = parent.document.URL
		if (callingURL.indexOf('?') != -1) {
			linkURL = callingURL.substring(callingURL.indexOf('?')+1,callingURL.length)
		}
	}
	
Tiemkoframe = new Array ("accueil.htm", "CequipermitTiemko.htm", "Tiemko 1986-1995.htm,  "Tiemko post Tiemko.htm", "�ric acc�s.htm", "Jean-Jacques acc�s.htm",","R�my acc�s.htm")
		
function newIframe(ach) {
	content.document.location.href = Tiemkoframe[ach]

}