var x
var y
var z
var maxX
var maxY
var maxZ = 0
for (x = 0; x < 1000; x++) {
    for (y = 0; y < 1000; y++) {
      z = x * y;
      if ((palintest(z)==true) && (z>maxZ)) {
        maxZ = z;
        maxX = x;
        maxY = y;
      }
    }
}
console.log(maxX,maxY,maxZ)


function palintest(num) {
  var inverted = "";

  num = num.toString();
  for (var i= num.length - 1 ;i>-1;i--) {
    inverted += num[i]
  }
if (inverted == num) {return true}
  else return false
}
