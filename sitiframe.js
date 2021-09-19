linkURL = "index.htm"
	if (parent.document.URL) {
		callingURL = parent.document.URL
		if (callingURL.indexOf('?') != -1) {
			linkURL = callingURL.substring(callingURL.indexOf('?')+1,callingURL.length)
		}
	}
	
Tiemkoframe = new Array ("accueil.htm", "accueil.htm","avantGH.htm", "1986-1995GH.htm", "apres1995GH.htm","jjt.htm","ed.htm","rc.htm","liens.htm")
		
function newIframe(ach) {
	content.document.location.href = Tiemkoframe[ach]

}