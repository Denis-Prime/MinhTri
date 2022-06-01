btnLogin = document.querySelector('.btn-login-nav-js');
btnSignup = document.querySelector('.btn-signup-nav-js');
container = document.querySelector('.container')
loginForm = document.querySelector('.login-back')
signupForm = document.querySelector('.signup-back')
exitBtnIcon = document.querySelectorAll('.exit-icon')
btnDangkyLogin = document.querySelector('.btn-dangky-js')
loginBtnFrom = document.querySelector('.login-btn')

btnLogin.addEventListener('click', function() {
    // container.style.display = 'none'
    signupForm.style.display = 'none'
    loginForm.style.display = 'flex'
})

btnSignup.addEventListener('click', function() {
    // container.style.display = 'none'
    signupForm.style.display = 'flex'
    loginForm.style.display = 'none'
})

for(let i = 0; i < exitBtnIcon.length; i++) {
    exitBtnIcon[i].addEventListener('click', function() {
        // container.style.display = 'block'
        loginForm.style.display = 'none'
        signupForm.style.display = 'none'   
    })

}
btnDangkyLogin.addEventListener('click', function() {
    // container.style.display = 'none'
    signupForm.style.display = 'flex'
    loginForm.style.display = 'none'
})
loginBtnFrom.addEventListener('click', function() {
    document.location.href='./User/user.html'
})



