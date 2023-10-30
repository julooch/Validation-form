let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

function validarNome() {
    let nomeValidado = document.getElementById('nomevalidado');
    let nome = document.getElementById('nome');

    if (nome.value.length < 2) {
        nomeValidado.innerHTML = 'Nome inválido';
        nomeValidado.style.color = 'red';
        nomeOk = false;
    } else {
        nomeValidado.innerHTML = 'Nome válido';
        nomeValidado.style.color = 'green';
        nomeOk = true;
    }
}

function validarEmail(){
    let email = document.getElementById('email');
    let emailValidado = document.getElementById('emailvalidado');

    if(email.value.length < 10){
        emailValidado.innerHTML = 'Email inválido';
        emailValidado.style.color = 'red';
        emailOk = false;
    }else{
        emailValidado.innerHTML = 'Email válido';
        emailValidado.style.color = 'green';
        emailOk = true;
    }
}

function validarMensagem(){
    let mensagem = document.getElementById('mensagem')
    let mensagemValidada = document.getElementById('mensagemvalidada')

    if (mensagem.value.length < 4){
        mensagemValidada.innerHTML = 'Mensagem inválida'
        mensagemValidada.style.color = 'red'
        mensagemOk = false;
    }else {
        mensagemValidada.innerHTML = 'Mensagem válida'
        mensagemValidada.style.color = 'green'
        mensagemOk = true;
    }
}

function enviarForm(){
    if(nomeOk && emailOk && mensagemOk == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente!')
    }
}
