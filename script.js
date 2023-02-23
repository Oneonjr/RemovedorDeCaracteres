function removeSpecialCharacters() {
    let input = document.getElementById("inputText").value;
    let output = input.replace(/[^\w\s]/gi, '');
    document.getElementById("outputText").innerHTML = output;
  }

const RemoverComEnter = document.getElementById('inputText');

  RemoverComEnter.addEventListener('keypress', (remover)=>{
    if (remover.key === 'Enter') {
      removeSpecialCharacters();
    }
  })
