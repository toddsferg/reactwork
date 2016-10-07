function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      found();
    }
  }
}
var arr = ["Alice", "Bob", "Waldo", "Winston"];

function actionWhenFound() {
  console.log("Waldo is at index " + arr.indexOf("Waldo") + "!");
}

findWaldo(arr, actionWhenFound);
