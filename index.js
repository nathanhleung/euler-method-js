(() => {
  // it's less typing
  function elById(id) {
  	return document.getElementById(id);
  }

  function val(id) {
  	return elById(id).value;
  }

  const solveBtn = elById('solve');
  const resultsEl = elById('result');

  solveBtn.addEventListener('click', () => {
  	const equation = val('equation');
    const initial = Number(val('initial'));
    const steps = Number(val('steps'));
    const target = Number(val('target'));
    const deltaX = target / steps;
    let result = initial;
    const xTable = [];
    const yTable = [];
    const dyDxTable = [];
    const dyTable = [];
  	for (let i = 0; i <= steps; i++) {
      const dyDx = math.eval(equation, {
      	x: i * deltaX,
        y: result,
      });
      xTable.push(i * deltaX);
      yTable.push(result);
      dyDxTable.push(dyDx);
      dyTable.push(dyDx * deltaX);
      if (i !== steps) {
      	result += dyDx * deltaX
      }
    }
    let resultString = '';
    resultString += `Result: ${result}\n`;
    resultString += `X Values: ${JSON.stringify(xTable)}\n`;
    resultString += `Y Values: ${JSON.stringify(yTable)}\n`;
    resultString += `dy/dx Values: ${JSON.stringify(dyDxTable)}\n`;
    resultString += `dy Values: ${JSON.stringify(dyTable)}`;
    resultsEl.innerHTML = resultString;
  });
})();
