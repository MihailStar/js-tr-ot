// javascript/training/optimization/4 №1
{
  const num = 1233456789;
  const sumSquare = getSumSquare(num);

  if (sumSquare >= 10 && sumSquare <= 100) {
    console.log('+++');
  } else {
    console.log('---');
  }

  function getSumSquare(num) {
    return String(num)
      .split('')
      .reduce((acc, digit) => acc + Number(digit) ** 2, 0);
  }
}
