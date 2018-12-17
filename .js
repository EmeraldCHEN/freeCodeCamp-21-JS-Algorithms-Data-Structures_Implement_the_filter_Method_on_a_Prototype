
var s = [23, 65, 98, 5];

Array.prototype.myFilter1 = function(callback){
  var newArray = [];
  this.forEach(function(element) {  
    if(callback(element)){
      newArray.push(element);
    } 
  })
  return newArray; 
}
  
let new_s1 = s.myFilter1(function(item){
  return item % 2 === 1;
});

console.log(new_s1); // [23, 65, 5]





// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/functional-programming/implement-the-filter-method-on-a-prototype/
