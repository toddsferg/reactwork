//primitives - identity and values are linked
//objects - values can be mutated

var a = 10;
var typeOfA = typeof a;
console.log(typeOfA);

var teacher = {
  name: "david"
};

teacher.name = "Todd";

console.log(teacher);
console.log(typeof teacher);

function myfunct(){
  //does nothing
}
console.log(typeof myfunct);

var david = {
  age: 31,
  countriesVisited: 6,
  birthMonth: 11
};

david.countriesVisited += 1;

console.log(david);
//passing an object into a function




///accessing nested properties

david.job = {
  role: 'instructor',
  businessNames: "Lighthouse Labs"
};

console.log(david.job.businessNames);
///