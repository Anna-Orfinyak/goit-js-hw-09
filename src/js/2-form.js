import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

let formData = { email: '', message: '' };

const LS_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', inputCheck);

function inputCheck(event) {
  const value = event.target.value;
  localStorage.setItem(LS_KEY, value);
  //   console.log(LS_KEY, value);
}

// if (value === 'email' || value === 'message') {
//   formData[value] = value.trim();
//   localStorage.setItem(LS_KEY, JSON.stringify(formData));
// }

function inputUpdate() {}
