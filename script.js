// const name = document.querySelector('#name');
// const phone =document.querySelector('#phone');
// const email = document.querySelector('#email');
// const website = document.querySelector('#website');
const password1El = document.querySelector('#password1');
const password2El = document.querySelector('#password2');
const form = document.querySelector('#form');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('#message');

let isValid = false;
let passwordsMatch = false;

const validateForm = ()=>{
  // Using constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if(!isValid){
    message.textContent = 'Please fill out all fields';
    message.style.color='red';
    messageContainer.gstyle.borderColor='red';
  }
  // Check if passwords match
  if(password1El.value === password2El.value){
    passwordsMatch = true;
    password1El.style.borderColor='green';
    password2El.style.borderColor='green';
  }else{
    passwordsMatch = false;
    message.textContent='Make sure passwords match!';
    message.style.color='red';
    messageContainer.gstyle.borderColor='red';
    password1El.style.borderColor='red';
    password2El.style.borderColor='red'

  }
  
}

const processFormData = (e)=>{
  e.preventDefault();
  // Validate form
  validateForm();
}

form.addEventListener('submit', processFormData);