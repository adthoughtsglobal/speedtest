on();
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
	while (randomWords.length < 1) {
	  const randomIndex = Math.floor(Math.random() * phrases.length);
	  const randomWord = phrases[randomIndex];
	  if (!randomWords.includes(randomWord)) {
		randomWords.push(randomWord);
	  }
	}
  
	return " " + randomWords.join(' ');
  }

const input = document.getElementById("input");
const result = document.getElementById("result");
let startTime; // Add startTime variable
document.getElementById("quote").innerHTML = quote;

function startTest() {
var quote = getRandomPhrase();
document.getElementById("quote").innerHTML = quote;
  input.value = " ";
  input.focus();
  startTime = new Date().getTime(); // Set 
}

function checkInput() {
if (input.value == "") {
	startTest();
}
  const typedText = input.value;

  if (typedText == toLowerCase(document.getElementById("quote").innerHTML)) {
    const elapsedTime = new Date().getTime() - startTime;
    const seconds = (elapsedTime / 1000).toFixed(2);
    const wordsPerMinute = calculateWordsPerMinute(typedText, seconds);
    var testr = `${wordsPerMinute} WPM`;
    var comment = "Keep Improving";
    if (wordsPerMinute < 10) {
    var comment = "You are too slow, practice a lot.."
    }
    if (wordsPerMinute > 10) {
    var comment = "Focus on your technique and keep practicing.."
    }
    if (wordsPerMinute > 30) {
    var comment = "Nice, focus more and keep practicing.."
    }
    if (wordsPerMinute > 50) {
    var comment = "You are an above avarage typer and keep practicing.."
    }
    if (wordsPerMinute > 60) {
    var comment = "You are way above average you would now get any typing job."
    }
    if (wordsPerMinute > 80) {
    var comment = "You are one of the worlds 1% greatest typists."
    }
    document.getElementById("gg").innerHTML = `<h1>${testr}</h1><p>${comment}</p>`;
    on();
  }
}

function calculateWordsPerMinute(text, seconds) {
  const wordCount = text.trim().split(" ").length;
  const wordsPerMinute = Math.round((wordCount / seconds) * 60);
  return wordsPerMinute;
}
