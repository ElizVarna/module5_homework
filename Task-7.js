let arr = [13, 13, 'q', 20, 45, 66, 'e',  20, 18, 15, 'f',  20, 0, 'null'];
let evenArr = 0;
let oddArr = 0;
let nullArr = 0;
let otherArr = 0; 
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    nullArr++;
  } else {
    if (arr[i] % 2 === 0) {
      evenArr++;
    } else if (arr[i] % 2 !== 0 && typeof(arr[i]) == 'number') {
      oddArr++;
    } else {
      otherArr++;
    }
  }
}
console.log('Even is ' + evenArr);
console.log('Odd is ' + oddArr);
console.log('Nul is ' + nullArr);
console.log('Other is ' + otherArr);