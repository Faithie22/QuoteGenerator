let btn = document.querySelector("#generate");
btn.addEventListener("click", myFunction);
function myFunction() {
	const quotes = {
		"Pamela Imomo": "Never manipulate youself to compete with people.",
		"Ghandhi": "We must be the change we want to see.",
        "Faithie": "Always be yourself, because life is too short to be someone else.",
        "Faithspeaks": "Perphaps we should learn to love ourselves more fiercely.",
        "Faith Onoshirie": "If you feel good about yourself, feel confident about yourself and carry yourself with pride, that is beauty.",
		"Frank Sinatu": "The best revenge is massive success.",
		"Nelson Mandela": "A winner is a dreamer who never gives up."
	};
	let speakers = Object.keys(quotes);
	let aSpeaker = speakers[Math.floor(Math.random()* speakers.length)];
	let aQuote = quotes[aSpeaker];
    document.querySelector("#quote").textContent = aQuote;
    document.querySelector("#speaker").textContent = aSpeaker;
}
