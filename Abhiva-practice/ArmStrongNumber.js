function armStrongNo(number) {
  let num = number;
  let noArr = [];
  let l = 0;
  while (num > 0) {
    noArr.push(num % 10);
    num = Math.floor(num / 10);
    l++;
  }
  let sum = 0;
  for (let n of noArr) {
    sum += Math.pow(n, l);
  }
  if (sum === number) {
    return "ArmStrong num";
  }
  return "Not ArmStrong num";
}
console.log(armStrongNo(153));
