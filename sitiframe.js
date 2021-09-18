linkURL = "index.htm"
	if (parent.document.URL) {
		callingURL = parent.document.URL
		if (callingURL.indexOf('?') != -1) {
			linkURL = callingURL.substring(callingURL.indexOf('?')+1,callingURL.length)
		}
	}
	
Magonframe = new Array ("accueil.htm", "forumacces.htm","oeuvresacces.htm","liensacces.htm","agendaacces.htm","coulissesacces.htm","temoinsacces.htm","projetsacces.htm","oeuvres.htm","liens.htm","agenda.htm","coulisses.htm","temoins.htm","projets.htm","images.htm","musique.htm","musmat.htm","imgmat.htm")
		
function newIframe(ach) {
	content.document.location.href = Magonframe[ach]

}
