// javascript/training/optimization/14 №1
{
  console.log(getRelativelyPrimes(10000));

  function getRelativelyPrimes(range) {
    const allDivisors = getAllDivisors(range);
    const result = [];

    for (let i = 2; i <= range; i++) {
      for (let j = i; j <= range; j++) {
        const iDivisors = allDivisors[i];
        const jDivisors = allDivisors[j];

        if (!haveIntersections(iDivisors, jDivisors)) {
          result.push([i, j]);
        }
      }
    }

    return result;
  }

  function getDivisors(num) {
    const result = [];

    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        result.push(i);
      }
    }

    return result;
  }

  function getAllDivisors(range) {
    const result = [[], [1]];

    for (let i = 2; i <= range; i++) {
      result.push(getDivisors(i));
    }

    return result;
  }

  function haveIntersections(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        return true;
      }
    }

    return false;
  }
}
