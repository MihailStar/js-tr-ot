// javascript/training/optimization/12 №1
{
  const input = document.querySelector('input');
  if (!(input instanceof HTMLInputElement)) {
    throw new Error('Input not found');
  }

  input.addEventListener('blur', () => {
    const { value } = input;
    let sum = 0;

    for (const char of value) {
      sum += +char;
    }

    console.log(sum);
  });
}

// javascript/training/optimization/12 №2
{
  const str = 'abcaab';
  let counter = 0;

  for (const char of str) {
    if (char === 'a') {
      counter++;
    }
  }

  console.log(counter);
}

// javascript/training/optimization/12 №3
{
  const str = 'abcaab';

  console.log(str.includes('a'));
}
