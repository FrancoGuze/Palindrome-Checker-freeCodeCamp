const btn = document.getElementById('check-btn');
const resultDisplay = document.getElementById('result');
const input = document.getElementById('text-input');
const body = document.querySelector('body');

let bodyCol = undefined;

const infoBtn = document.getElementById('info-btn')
const closeInfoBtn = document.getElementById('close-info')
const dialog= document.querySelector('dialog')

//Opening and closing Dialog
infoBtn.addEventListener("click",()=>dialog.showModal())
closeInfoBtn.addEventListener('click',()=>dialog.close())


//function for background change
const backgroundColorChange = () => {
  if (bodyCol === true) {
    body.style.background = "#63dc7b"
  }
  else {
    body.style.background = "#f14f4f"
  }
}
//function to get Reversed word
const inputReverse = (word) => {
  const wordArray = word.split('');
  const reverseArray = wordArray.reverse()
  const reverse = reverseArray.join('')
  return reverse
}
//Palindrome Checker
const checkWord = () => {
  const originalValue = input.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  const valueReverse = inputReverse(originalValue)

  if (originalValue == '') {
    alert("Please input a value")
  }
  else if (originalValue != '') {

    if (originalValue === valueReverse) {
      bodyCol = true
      resultDisplay.innerText = `${input.value} is a palindrome`

    }
    else {
      bodyCol = false
      resultDisplay.innerText = `${input.value} is not a palindrome`
    }
    
  }
resultDisplay.classList.remove('hide')
  input.value = ''
  backgroundColorChange()

}



btn.addEventListener('click', checkWord);

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkWord();
  }
})
