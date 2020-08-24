function calculation() {
  var n1 = parseFloat(document.getElementById('n1').value);

  var n2 = parseFloat(document.getElementById('n2').value);

  var operator = document.getElementById('operator').value;

  if(operator==="+") {
    document.getElementById('result').value=n1+n2;
  }
  if(operator==="-") {
    document.getElementById('result').value=n1-n2;
  }
  if(operator==="x") {
    document.getElementById('result').value=n1*n2;
  }
  if(operator==="/") {
    document.getElementById('result').value=n1/n2;
  }
  if(operator==="%") {
    document.getElementById('result').value=n1%n2;
  }
}
