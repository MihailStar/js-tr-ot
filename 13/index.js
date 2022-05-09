// javascript/training/optimization/13 №1
{
  const [xSize, ySize] = [100, 100];

  const table = document.querySelector('table');
  if (!(table instanceof HTMLTableElement)) {
    throw new Error('Table not found');
  }

  table.addEventListener('click', (event) => {
    if (event.target instanceof HTMLTableCellElement) {
      event.target.style.backgroundColor =
        event.target.style.backgroundColor === '' ? 'red' : '';
    }
  });

  let tableContent = '';

  for (let y = 1; y <= ySize; y += 1) {
    tableContent += '<tr>';

    for (let x = 1; x <= xSize; x += 1) {
      tableContent += `<td>x: ${x}, y: ${y}</td>`;
    }

    tableContent += '</tr>';
  }

  table.innerHTML = tableContent;
}
