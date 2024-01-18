var stdconf = document.getElementById("stdconf");
var stdin = document.getElementById("stdin");
var pHidden = document.getElementById("pHidden")
var stdout = document.getElementById("stdout");
var randomAnswer = Math.floor(Math.random() * 10000);
stdout.textContent = String(randomAnswer)
stdin.value = 0;

stdconf.addEventListener("click", function() {
	if (randomAnswer == stdin.value) {
		pHidden.hidden = false;
		console.log("log");
		document.getElementById("captcha").close();
	} else {
		pHidden.hidden = true;
		console.log("hog");
		stdin.value = 0;
		randomAnswer = Math.floor(Math.random() * 10000);
		stdout.textContent = String(randomAnswer)
	}
});
