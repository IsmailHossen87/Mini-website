const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')

function toggleButtons (activeButton,inactiveButton){
    activeButton.classList.add('active')
    inactiveButton.classList.remove('active')
}
button1.addEventListener('click',()=>{
    toggleButtons(button1,button2)
})
button2.addEventListener('click', () => {
    toggleButtons(button2, button1);
  });

  let count = 0;

function increase() {
  count++;
  document.getElementById('number').textContent = count;
}

function decrease() {
  count--;
  document.getElementById('number').textContent = count;
}
