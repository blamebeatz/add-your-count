//document.getElementByid("coutn-el").innerText


let countEl = document.getElementById("count-el") 
let saveEl = document.getElementById("save-el")

let incrementNumber = 0;

function increment() {
  incrementNumber = incrementNumber + 1
  countEl.innerText = incrementNumber
}



 function save() {
  const saveNumber = incrementNumber + " - " ;
  saveEl.textContent += saveNumber;
  countEl.textContent = 0;
   incrementNumber = 0;
 }

 