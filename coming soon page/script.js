const input = document.getElementById('email')
const button = document.getElementById('btn')
const regExEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const errorMessage = document.getElementById('error-message')

button.addEventListener('click',function(event){
    if(input.value === ''){
      errorMessage.textContent = "Enter a Email"
    }else if(!regExEmail.test(input.value)){
      errorMessage.textContent = "Enter a valid Email"
    }else{
      errorMessage.textContent = 'Regester succesful'
    }

})
