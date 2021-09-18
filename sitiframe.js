linkURL = "index.htm"
	if (parent.document.URL) {
		callingURL = parent.document.URL
		if (callingURL.indexOf('?') != -1) {
			linkURL = callingURL.substring(callingURL.indexOf('?')+1,callingURL.length)
		}
	}
	
Tiemkoframe = new Array ("accueil.htm", "forumacces.htm", "oeuvresacces.htm","liensacces.htm","avant.htm", "Tiemko1986-1995.htm,  "TiemkopostTiemko.htm", "ed.htm", "jjt.htm",","rc.htm")
		
function newIframe(ach) {
	content.document.location.href = Tiemkoframe[ach]

}
