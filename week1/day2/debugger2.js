var originalWords = process.argv.slice(2);
var pigLatinWords = [];

console.log(originalWords[i]);


for (var i = 0; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
  console.log(pigLatinWords);
}

console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {

  return word.slice(1, word.length) + word[0] + "ay";
}