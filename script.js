function getRandomPhrase() {
	const phrases = [
		'banana',
		'coffee',
		'guitar',
		'butter',
		'dragon',
		'soccer',
		'island',
		'jazz',
		'peanut',
		'purple',
		'magnet',
		'rocket',
		'summer',
		'sunset',
		'flower',
		'singer',
		'orange',
		'bottle',
		'turtle',
		'hockey'
	];

	// Calculate the common word length
	const wordLength = phrases.reduce((total, phrase) => total + phrase.length, 0) / phrases.length;

	// Filter phrases with similar length
	const filteredPhrases = phrases.filter(phrase => phrase.length === Math.round(wordLength));

	const randomIndex = Math.floor(Math.random() * filteredPhrases.length);
	return filteredPhrases[randomIndex];
}
neww()

function neww() {
	document.getElementById("inputt").value = ""

	document.getElementById("inputd").value = getRandomPhrase();
}

function proc() {
	if (document.getElementById("inputt").value == document.getElementById("inputd").value) {
		alert("You have completed the test")
		neww()
	}
}
