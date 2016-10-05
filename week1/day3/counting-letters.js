var input = process.argv[2]

function countObject(input) {
  var result = {}
  var noSpaces = input.split(" ").join('').split("");
    for (var i = 0; i < noSpaces.length; i++) {
      var currentLetter =  noSpaces[i];

        if(result.hasOwnProperty(currentLetter)){
          result[currentLetter] += 1;
        }else { result[currentLetter] = 1 }
    }
  return result;
}

console.log(countObject(input));
