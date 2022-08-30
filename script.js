

function validate() {
   let firstName = document.getElementById('first-name').value
   let lastName = document.getElementById('last-name').value
   let email = document.getElementById('email').value
   let phoneNumber = document.getElementById('phone').value
   let batch = document.getElementById('batch').value
   let Module = document.getElementById('module').value
   let tnC = document.getElementById('tnC').checked

   let success = false
   if (firstName.length >= 3) {
      document.getElementById('first-name-valid').style.display = 'block'
      document.getElementById('first-name-invalid').style.display = 'none'
   } else {
      document.getElementById('first-name-invalid').style.display = 'block'
      document.getElementById('first-name-valid').style.display = 'none'
      success = true
   }
   if (lastName.length >= 3) {
      document.getElementById('last-name-valid').style.display = 'block'
      document.getElementById('last-name-invalid').style.display = 'none'

   } else {
      document.getElementById('last-name-invalid').style.display = 'block'
      document.getElementById('last-name-valid').style.display = 'none'
      success = true
   }
   if (email && email.includes("@") &&
      email.includes(".") &&
      email.lastIndexOf(".") <= email.length - 3 &&
      email.indexOf('@') !== 0) {
      document.getElementById("email-valid").style.display = "block";
      document.getElementById("email-invalid").style.display = "none";
   } else {
      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("email-valid").style.display = "none";
      success = true
   }

   if (phoneNumber && phoneNumber.length === 10) {
      document.getElementById("phone-valid").style.display = "block";
      document.getElementById("phone-invalid").style.display = "none";

   } else {
      document.getElementById('phone-invalid').style.display = "block";
      document.getElementById('phone-valid').style.display = "none";
      success = true
   }
   if (batch !== 'None') {
      document.getElementById('batch-valid').style.display = "block";
      document.getElementById('batch-invalid').style.display = "none";

   } else {
      document.getElementById('batch-invalid').style.display = "block";
      document.getElementById('batch-valid').style.display = "none";
      success = true
   }
   if (Module !== 'None') {
      document.getElementById('module-valid').style.display = "block";
      document.getElementById('module-invalid').style.display = "none";

   } else {
      document.getElementById('module-invalid').style.display = "block";
      document.getElementById('module-valid').style.display = "none";
      success = true
   }
   if (tnC) {
      document.getElementById('tnC-invalid').style.display = "none";

   } else {
      document.getElementById('tnC-invalid').style.display = "block";
      success = true
   }

   if (!success) {
      window.alert("Your details have been saved successfully!");
      firstName = document.getElementById('first-name').value = ''
      lastName = document.getElementById('last-name').value = ''
      email = document.getElementById('email').value = ''
      phoneNumber = document.getElementById('phone').value = ''
      batch = document.getElementById('batch').value = 'None'
      Module = document.getElementById('module').value = 'None'
      tnC = document.getElementById('tnC').checked = false

      document.getElementById('first-name-valid').style.display = 'none'
      document.getElementById('last-name-valid').style.display = 'none'
      document.getElementById('email-valid').style.display = "none"
      document.getElementById('phone-valid').style.display = "none";
      document.getElementById('batch-valid').style.display = "none";
      document.getElementById('module-valid').style.display = "none";

   }

}