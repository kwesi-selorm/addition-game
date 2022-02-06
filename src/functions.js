function createArray(array, max) {
  if (array.length === 3) {
    return array;
  }
  let val = Math.floor(Math.random() * max) + 1;
  for (let i = 0; i < 3; i++) {
    if (array[i] === val) {
      return createArray(array, max);
    }
  }
  array.push(val);
  return createArray(array, max);
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function correctAnswer(id1, id2) {
  let answerObject = document.getElementById(id1);
  let symbol = document.getElementById(id2);
  answerObject.hidden = false;
  symbol.style.transform = "scale(2)";
  setTimeout(() => (answerObject.hidden = true), 200);
  setTimeout(() => (symbol.style.transform = "scale(1)"), 200);
}

function wrongAnswer(id1, id2) {
  let answerObject = document.getElementById(id1);
  let symbol = document.getElementById(id2);
  answerObject.hidden = false;
  symbol.style.transform = "scale(2)";
  setTimeout(() => (answerObject.hidden = true), 200);
  setTimeout(() => (symbol.style.transform = "scale(1)"), 200);
}

export { createArray, shuffleArray, correctAnswer, wrongAnswer };
