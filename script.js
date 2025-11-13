const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {

        const atual = document.querySelector('.ativo');


        const proximoPassoID = 'passo-' + this.getAttribute('data-proximo');


        const proximo = document.getElementById(proximoPassoID);

        if (atual) {
            atual.classList.remove('ativo');
        }


        if (proximo) {
            proximo.classList.add('ativo');
        } else {
            console.error('ERRO CRÍTICO: O passo de destino não foi encontrado: ' + proximoPassoID);

        }
        const passosDeMorte = ['11', '12', '13', '14', '15'];
        if (passosDeMorte.includes(proximoId)) {
            document.getElementById('mensagem-final').style.display = 'block';
        } else {
            document.getElementById('mensagem-final').style.display = 'none';
        }
    });
});
