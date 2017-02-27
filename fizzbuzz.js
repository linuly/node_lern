var max = 20;
var i, res;

for (i = 0; i < max + 1; i++) {
  res =  (i % 3 == 0) ? 'Fizz' : '';
  res += (i % 5 == 0) ? 'Buzz' : '';
  res = (res != '') ? res : i;
  console.log(res);
}
