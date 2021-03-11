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

const validateForm = ()=>{
  // Using constraint API
  isValid = form.checkValidity();
  console.log(isValid);
}

const processFormData = (e)=>{
  e.preventDefault();
  // Validate form
  validateForm();
}

form.addEventListener('submit', processFormData);