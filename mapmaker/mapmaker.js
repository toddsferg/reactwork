




function myMap(list, callback){
  var ListCopy = [];
  for (var elm of list){
    ListCopy.push(callback(elm));
  }
return ListCopy
}

var Output = myMap(["ground", "control", "to", "major", "tom"], function(newArr){
  return newArr.length;
});

console.log(Bill);

