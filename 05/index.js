// javascript/training/optimization/5 №1
{
  const curr = new Date();
  const currMonth = curr.getMonth();
  const currDate = curr.getDate();
  const currDay = curr.getDay();

  for (let i = 1900; i <= 2100; i++) {
    const date = new Date(i, currMonth, currDate);
    const day = date.getDay();

    if (currDay === day) {
      console.log(date);
    }
  }
}

// javascript/training/optimization/5 №2
{
  const obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
  let sum = 0;

  for (const key in obj) {
    const value = obj[key];
    const firstChar = String(value)[0];

    if (firstChar === '1' || firstChar === '2') {
      sum += value;
    }
  }

  console.log(sum);
}
