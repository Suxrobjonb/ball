var elForm = document.querySelector(".site__form");

elForm.addEventListener("submit", function(evt) {
   evt.preventDefault()
   var MAX_BALL = 150;
   var MIN_BALL = 90;
   
   var elInput = document.querySelector(".site__input");
   var elSelect = document.querySelector(".site__selec-university");
   var elText = document.querySelector(".answers") 

   var elInputVal = elInput.value;
   var elSelectVal = elSelect.value;
   
   
   
   if (elInputVal <= 0) {
      elText.textContent = "Musbat son Yozing!"
   }
   else if (elInputVal >= MIN_BALL && elInputVal <= MAX_BALL){
      elText.textContent = "O'qishga kirdingiz";
   }
  
   else if (elInputVal < MIN_BALL) {
      elText.textContent = "o'qishga kirolmadingiz";
   }

   else if (elInputVal > MAX_BALL) {
      elText.textContent = "kamroq son yozing";
   }

})