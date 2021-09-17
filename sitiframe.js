linkURL = "index.htm"
	if (parent.document.URL) {
		callingURL = parent.document.URL
		if (callingURL.indexOf('?') != -1) {
			linkURL = callingURL.substring(callingURL.indexOf('?')+1,callingURL.length)
		}
	}
	
Tiemkoframe = new Array ("accueil.htm", "CequipermitTiemko.htm", "Tiemko1986-1995.htm,  "TiemkopostTiemko.htm", "ED.htm", "JJT.htm",","RC.htm")
		
function newIframe(ach) {
	content.document.location.href = Tiemkoframe[ach]

}