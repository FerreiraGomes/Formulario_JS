const form = document.getElementById('form-matematico');

let formEValido = false;

function validaNumero (campoA,campoB) {
    const numeroComoArray = campoB > campoA;
    return numeroComoArray;
}

form.addEventListener('submit', function(e) {
    let campoA = parseFloat(document.getElementById('numeroA').value);
    let campoB = parseFloat(document.getElementById('numeroB').value);
    e.preventDefault();

    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');
    const mensagemSucesso = `Formulário validado, o valor do número B é maior do que o número A`;
    const mensagemError = `Formulário invalidado, tente novamente`;

    formEValido = validaNumero(numeroA.value, numeroB.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.mensage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';

    } else {
        const containerMensagemError = document.querySelector('.mensage');
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';

    }
})

