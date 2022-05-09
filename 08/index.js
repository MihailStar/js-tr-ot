// javascript/training/optimization/8 №1
{
  const to = 1_000;

  console.log(Math.floor(to / 5) - 1); // -> 199
}

// javascript/training/optimization/8 №2
{
  const to = 1_000_000;
  let counter = 0;

  // 9e0 * 1 + 9e1 * 2 + 9e2 * 3 + 9e3 * 4 + 9e4 * 5 + 9e5 * 6
  for (
    let index = 1, toLength = to.toString().length;
    index < toLength;
    index++
  ) {
    counter += 9 * 10 ** (index - 1) * index;
  }

  console.log(counter); // -> 5888889
}
