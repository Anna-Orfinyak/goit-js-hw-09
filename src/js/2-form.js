const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
let formData = {
    email: '',
    message: ''
};

const storageData = localStorage.getItem(STORAGE_KEY);

if (storageData) {
    try {
        const savedData = JSON.parse(storageData);
        if (savedData.email) {
            form.elements.email.value = savedData.email;
          }
          if (savedData.message) {
            form.elements.message.value = savedData.message;
          }
    }
    catch (err) {
        console.error('Loading data from local storage failed', err);
    }
}

form.addEventListener('input', (event) => {
    const { name, value } = event.target;
      if (name in formData) {
        formData[name] = value.trim();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    };
    console.log('Form Data', formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});

