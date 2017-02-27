function FizzBuzz (max = 25) {
  var i, res;

  for (i = 0; i < 25; i++) {
    res =  (i % 3 == 0) ? 'Fizz' : '';
    res += (i % 5 == 0) ? 'Buzz' : '';
    console.log(i + ': ' + res);
  }
}
