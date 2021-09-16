linkURL = "index.htm"
	if (parent.document.URL) {
		callingURL = parent.document.URL
		if (callingURL.indexOf('?') != -1) {
			linkURL = callingURL.substring(callingURL.indexOf('?')+1,callingURL.length)
		}
	}
	
Tiemkoframe = new Array ("accueil.htm", "Tiemko avant Tiemko accès.htm", "Tiemko 1986-1995.htm,  "Tiemko post Tiemko accès.htm", "Éric accès.htm", "Jean-Jacques accès.htm",","Rémy accès.htm")
		
function newIframe(ach) {
	content.document.location.href = Magonframe[ach]

}