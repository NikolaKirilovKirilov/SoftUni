/*
function solve() {
  
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if (convention === 'Pascal Case') {
    let output = () => {
      return text.replace(/(\w)(\w*)/g,
      function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();}).replace(/\s+/g, '');;
    }
    result.innerText = output();
  }
  else if (convention === 'Camel Case') {
    let output = () => {
      return text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    }
    result.innerText = output();
  }
  else
  {
    result.innerText = 'Error!';
  }
}
*/

function solve() {
  const text = document.getElementById("text").value;
  const naming = document.getElementById("naming-convention").value;
  const resultContainer = document.getElementById("result");

  const splitted = text.split(" ");

  // resultString must be assigned with let, otherwise can not be modified
  let resultString = "";

  if (naming == "Pascal Case") {
    for (let i = 0; i < splitted.length; i++) {
      resultString += splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    // resultContainer must receive final value
    resultContainer.textContent = resultString;
  } else if (naming == "Camel Case") {
    resultString += splitted[0][0].toLowerCase()
      + splitted[0].slice(1, splitted[0].length).toLowerCase();
    for (let i = 1; i < splitted.length; i++) {
      resultString += splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    // resultContainer must receive final value
    resultContainer.textContent = resultString;
  } else {
    // resultContainer.textContent() = resultString;
    resultContainer.textContent = "Error!";
  }
}