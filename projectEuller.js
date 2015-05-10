var problem1 = function () {
  var sum = 0
  for (i=1; i<1000; i++) {
    if (i%3 == 0 || i%5 == 0) {
      sum = sum + i;
    }
  }
  console.log("The sum of all the multiples of 3 or 5 below 1000 +  is " 
    + sum);
}


var problem2 = function () {
  var firstTerm = 1;
  var secondTerm = 2;
  var sum = secondTerm;

  while (secondTerm < 4000000) {
    var nextTerm = firstTerm + secondTerm;

    if (nextTerm % 2 ==0) {
      sum =+ nextTerm;
    }
    firstTerm = secondTerm;
    secondTerm = nextTerm;

  }
  console.log("The sum of the even-valued terms is " + sum);
}


var problem3 = function () {
  var limit = 600851475143;
  var largerFactor = 0;
  for (i=0; i<= limit; i++) {
    if (limit % i == 0 && i > largerFactor) {
      largerFactor = i;
    }
  }
  console.log("The largest prime factor of 600851475143 is " 
    + largerFactor);
}
