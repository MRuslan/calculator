export function calculate(input) {
  if (input.length === 0 || !Array.isArray(input)) return 0;

  const result = input.reduce((acc, val, idx, arr) => {
    const nextNumber = Number(arr[idx + 1]);

    if (isNaN(nextNumber)) return acc;

    switch (val) {
      case '+':
        return acc + nextNumber;
      case '−':
        return acc - nextNumber;
      case '×':
        return acc * nextNumber;
      case '÷':
        return acc / nextNumber;
    }

    return acc;
  }, Number(input[0]));

  return result;
}