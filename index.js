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
    const initialX = Number(val('initialX'));
    const initialY = Number(val('initialY'));
    const steps = Number(val('steps'));
    const target = Number(val('target'));
    const deltaX = (target - initialX) / steps;
    let result = initialY;
    const xTable = [];
    const yTable = [];
    const dyDxTable = [];
    const dyTable = [];
  	for (let i = 0; i <= steps; i++) {
      const dyDx = math.eval(equation, {
      	x: initialX + i * deltaX,
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
