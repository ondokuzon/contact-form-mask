const phoneForm = document.querySelector('#phone');
phoneForm.addEventListener('keypress', (e) => {
  return isNumberKey(e);
})

const isNumberKey = (e) => {
  if (phoneForm.value.length == 1) phoneForm.value = "(" + phoneForm.value;
  if (phoneForm.value.length == 4) phoneForm.value = phoneForm.value + ")";
  if (phoneForm.value.length == 12) e.preventDefault();
  let charCode = (e.which) ? e.which : event.keyCode;
  if ((charCode < 48 || charCode > 57)) e.preventDefault();
}

const phoneNumber = () => {
  if ((phoneForm.value).length < 12) {
    alert('Lütfen doğru bir telefon numarası giriniz!'); // Please enter a valid phone number!
    return false;
  }
  if (String(phoneForm.value).charAt(1) == "0") {
    alert('Lütfen telefon numaranızı başında 0 olmadan giriniz!'); // Please enter your phone number without the beginning 0!
    return false;
  }
  return true;
}

const formSubmitButton = document.querySelector('.wpcf7-submit');
formSubmitButton.addEventListener('click', (e) => {
  const formStatus = phoneNumber();
  if (!formStatus) e.preventDefault();
});