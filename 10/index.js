// javascript/training/optimization/10 №1
{
  const input = document.querySelector('input');
  if (!(input instanceof HTMLInputElement)) {
    throw new Error('Input not found');
  }

  input.addEventListener('blur', () => {
    const { value } = input;

    if (value === '1' || value === '2') {
      console.log('+++');
    } else {
      console.log('---');
    }
  });
}

// javascript/training/optimization/10 №2
{
  const input = document.querySelector('input');
  if (!(input instanceof HTMLInputElement)) {
    throw new Error('Input not found');
  }

  input.addEventListener('blur', () => {
    const max = Number(input.value);
    let sum = 0;

    for (let num = 1; num <= max; num++) {
      sum += num;
    }

    console.log(sum);
  });
}

// javascript/training/optimization/10 №3
{
  const input = document.querySelector('input');
  if (!(input instanceof HTMLInputElement)) {
    throw new Error('Input not found');
  }
  const div = document.querySelector('div');
  if (!(div instanceof HTMLDivElement)) {
    throw new Error('Div not found');
  }

  input.addEventListener('blur', () => {
    const value = Number(input.value);
    let sum = 0;

    for (let i = 1; i <= value; i++) {
      if (value % i === 0) {
        sum += i;
      }
    }

    div.textContent = String(sum);
  });
}

// javascript/training/optimization/10 №4
{
  const paragraphs = document.querySelectorAll('p');

  for (const paragraph of paragraphs) {
    paragraph.textContent = String(Number(paragraph.textContent) ** 2);
  }
}

// javascript/training/optimization/10 №5
{
  const input = document.querySelector('input');
  if (!(input instanceof HTMLInputElement)) {
    throw new Error('Input not found');
  }

  const minLenght = Number(input.dataset['min'] ?? '5');
  const maxLenght = Number(input.dataset['max'] ?? '10');

  input.addEventListener('blur', () => {
    const {
      value: { length },
    } = input;

    if (length >= minLenght && length <= maxLenght) {
      console.log('+++');
    } else {
      console.log('---');
    }
  });
}
