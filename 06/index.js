// javascript/training/optimization/6 №1
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 0;
  let i = 0;

  for (const num of arr) {
    if (sum > 10) {
      break;
    }

    sum += num;
    i += 1;
  }

  console.log(i);
}

// javascript/training/optimization/6 №2
{
  for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }
}

// javascript/training/optimization/6 №3
{
  for (let i = 0; i <= 100; i += 6) {
    console.log(i);
  }
}

// javascript/training/optimization/6 №4
{
  const currYear = new Date().getFullYear();

  for (let month = 0; month <= 11; month++) {
    const date = new Date(currYear, month, 13);

    if (date.getDay() === 5) {
      console.log(date);
    }
  }
}
