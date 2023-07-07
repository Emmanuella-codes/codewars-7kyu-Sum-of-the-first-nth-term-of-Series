// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>
Sum of the first nth term of Series</h1>`;

//solution
function seriesSum(n) {
  if (n === 0) {
    return '0.00';
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }

  return sum.toFixed(2);
}

console.log(seriesSum(2));
console.log(seriesSum(1));
console.log(seriesSum(4));
console.log(seriesSum(5));
