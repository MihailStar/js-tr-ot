// javascript/training/optimization/11 №1
{
  // https://ru.wikihow.com/найти-число-членов-арифметической-прогрессии
  const to = 1000;
  const difference = 7;
  const a1 = 0;
  const aN = to - (to % difference);

  console.log((aN - a1) / difference + 1);
}

// javascript/training/optimization/11 №2
{
  function getSumDivisors(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }

    return sum;
  }

  console.log(getSumDivisors(320));
}
