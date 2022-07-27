// selecionando elementos do HTML

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

// add um evento listner quando dar um submit no form
// quando clickar no botao o evento submit sera aplicado

form.addEventListener('submit', (e) => { //objeto evente(e)
    e.preventDefault() // para não recarregar a página quando enviar o formulário
    checkInputs()
}) 

// efetuando validaçoes (success or error)

function checkInputs() {
    const usernameValue = username.value // esse input tem uma prorpiedade chamada value que guarda seu valor
    const emailValue = email.value // values dos inputs
    const passwordValue = password.value 
    const passwordConfirmationValue = passwordConfirmation.value 

    if (usernameValue === '') {
        setErrorFor(username, 'O nome de usuário é obrigatório.')
    } else {
        setSuccessFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'O Nome de usuário é obrigatório.')
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Por Favor, insira um email válido.')
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'A Senha é obrigatória.')
    } else if (passwordValue.length < 7) {
        setErrorFor(password, 'A Senha precisa ter no mínimo 7 caracteres.')
    } else {
        setSuccessFor(password)
    }

    if (passwordConfirmation === '') {
        setErrorFor(password, 'A Confirmação senha é obrigatória.')
    } else if (passwordConfirmationValue != passwordValue) {
        setErrorFor(passwordConfirmation, 'As senhas não estão iguais.')
    } else {
        setSuccessFor(passwordConfirmation)
    }
       
    const formControls = form.querySelectorAll('.form-control')
    const formIsValid = [...formControls].every(formControl => {
        return formControl.className === 'form-control success'
    })

    if (formIsValid) {
        alert('FORMULÁRIO COMPLETO')
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small') // vai selecionar o small que esta dentro do form-control

    // add msg de erro
    small.innerText = message;

    // add classe de erro
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement // vai retornar a div que é pai desse input que no caso é a form-control
    
    // add classe de sucesso
    formControl.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
