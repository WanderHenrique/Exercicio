const form = document.querySelector('.form form');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  let isValid = true;
  
  const firstname = document.querySelector('#firstname');
  if (firstname.value === '') {
    isValid = false;
    firstname.classList.add('error');
  } else {
    firstname.classList.remove('error');
  }
  
  const lastname = document.querySelector('#lastname');
  if (lastname.value === '') {
    isValid = false;
    lastname.classList.add('error');
  } else {
    lastname.classList.remove('error');
  }
  
  const email = document.querySelector('#email');
  if (email.value === '' || !email.value.includes('@')) {
    isValid = false;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }
  
  const number = document.querySelector('#number');
  if (number.value === '') {
    isValid = false;
    number.classList.add('error');
  } else {
    number.classList.remove('error');
  }
  
  const password = document.querySelector('#password');
  if (password.value === '') {
    isValid = false;
    password.classList.add('error');
  } else {
    password.classList.remove('error');
  }
  
  const confirmPassword = document.querySelector('#confirmPassword');
  if (confirmPassword.value === '' || confirmPassword.value !== password.value) {
    isValid = false;
    confirmPassword.classList.add('error');
  } else {
    confirmPassword.classList.remove('error');
  }
  
  if (isValid) {
    // Submit form data
  }
});