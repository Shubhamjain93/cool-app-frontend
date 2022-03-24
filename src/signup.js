let formBtn = document.querySelector('#signup')

formBtn.addEventListener('click', () => {
  let fullname = document.querySelector('#name') || null;
  let email = document.querySelector('#remail');
  let psd = document.querySelector('#psd');
  let pswd = document.querySelector('#pswd') || null;


  // new change 
  if (fullname != null) {
    if (fullname.value.length < 3) {
      showFormerror('name too short');
    } else if (!email.value.length) {
      showFormerror('Enter Your email');
    } else if (psd.value.length < 8) {
      showFormerror('Password must be 8 letters long');
    } else if (pswd.value.length < 8) {
      showFormerror('Confirm password must be 8 letters long');
    } else if (psd.value != pswd.value) {
      showFormerror("Passwords did not match");
    } else {
      senddata('http://127.0.0.1:3000/signup', {
        name: fullname.value,
        email: remail.value,
        psd: psd.value,
        pswd: pswd.value
      })
    }
  } else {//login pAGE new change 
    if (!lemail.value.length || !passd.value.length) {
      alert('Please Fill the details');
    } //else {
    //   senddata('http://127.0.0.1:3000/signup', {
    //     lemail: lemail.value,
    //     passd: passd.value,
    //   })
    // }
  }
})


$("#login-btn").click(async () => {

  let email = $('#lemail').val()
  let psd = $('#passd').val()

  let validate = validateEmail(email)
  if (!validate) {
    return showFormerror('Invalid Email')
  }

  let payload = {
    email: email,
    psd: psd
  }

  let result = await senddata('http://127.0.0.1:3000/login', payload)
  console.log({ result });
  if (result.status) {
    window.location.href = 'home.html';
  }
})
