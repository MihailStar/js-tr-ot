// javascript/training/optimization/7 №1
{
  const str = 'http://code.mu';

  if (str.startsWith('http')) {
    console.log('+++');
  } else {
    console.log('---');
  }
}

// javascript/training/optimization/7 №2
{
  const arr = fillArr('x', 5);
  console.log(arr);

  function fillArr(val, amount) {
    return Array(amount).fill(val);
  }
}
