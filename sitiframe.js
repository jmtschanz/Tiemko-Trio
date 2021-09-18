linkURL = "index.htm"
	if (parent.document.URL) {
		callingURL = parent.document.URL
		if (callingURL.indexOf('?') != -1) {
			linkURL = callingURL.substring(callingURL.indexOf('?')+1,callingURL.length)
		}
	}
	
Tiemkoframe = new Array ("accueil.htm", "forumacces.htm","avant.htm","liensacces.htm","agendaacces.htm","coulissesacces.htm","temoinsacces.htm","ed.htm","oeuvres.htm","liens.htm","agenda.htm","coulisses.htm","temoins.htm","ed.htm","images.htm","musique.htm","musmat.htm","imgmat.htm")
		
function newIframe(ach) {
	content.document.location.href = Tiemkoframe[ach]

}