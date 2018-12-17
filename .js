
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
  
var new_s = s.myFilter1(function(item){
  return item % 2 === 1;
 
});

console.log(new_s); // [23, 65, 5]
