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

function ChangeImg() {
  document.getElementById("myImg").src = "Accueilx.png";
}

function ChangeImg2() {
  document.getElementById("myImg").src = "Avantx.png";
}

function ChangeImg3() {
  document.getElementById("myImg").src = "1986-1995x.png";
}
 
function ChangeImg4() {
  document.getElementById("myImg").src = "Après1995x.png";
}

function ChangeImg5() {
  document.getElementById("myImg").src = "Accueil.png";
}

function ChangeImg6() {
  document.getElementById("myImg").src = "Avant.png";
}

function ChangeImg7() {
  document.getElementById("myImg").src = "1986-1995.png";
}

function ChangeImg8() {
  document.getElementById("myImg").src = "Après1995.png";
}
