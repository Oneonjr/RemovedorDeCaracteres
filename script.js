function removeSpecialCharacters() {
    let input = document.getElementById("inputText").value;
    let output = input.replace(/[^\w\s]/gi, '');
    document.getElementById("outputText").innerHTML = output;
  }