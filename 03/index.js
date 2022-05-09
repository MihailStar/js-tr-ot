// javascript/training/optimization/3 №1
{
  const num = 123;
  const firstChar = String(num)[0];

  if (firstChar === '1' || firstChar === '2') {
    console.log('+++');
  } else {
    console.log('---');
  }
}

// javascript/training/optimization/3 №2
{
  const date = new Date();
  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    console.log('выходной');
  } else {
    console.log('рабочий');
  }
}

// javascript/training/optimization/3 №3
{
  const date = new Date();
  const year = date.getFullYear();
  const res = year >= 2020 && year <= 2030 ? 'подходит' : 'не подходит';

  console.log(`год ${year} ${res}`);
}
