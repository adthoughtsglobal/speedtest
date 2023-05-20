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
  
	const randomWords = [];
	while (randomWords.length < 5) {
	  const randomIndex = Math.floor(Math.random() * phrases.length);
	  const randomWord = phrases[randomIndex];
	  if (!randomWords.includes(randomWord)) {
		randomWords.push(randomWord);
	  }
	}
  
	return randomWords.join(' ');
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
