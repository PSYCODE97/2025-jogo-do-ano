const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        // Encontra o passo atual (que tem a classe 'ativo')
        const atual = document.querySelector('.ativo');
        
        // Constrói o ID do próximo passo (ex: 'passo-1', 'passo-2')
        const proximoPassoID = 'passo-' + this.getAttribute('data-proximo');
        
        // Tenta encontrar o elemento pelo ID
        const proximo = document.getElementById(proximoPassoID);

        // Remove a classe 'ativo' do passo atual
        // Este comando só deve falhar se não houver NENHUM passo 'ativo' na página.
        if (atual) {
            atual.classList.remove('ativo');
        }

        // VERIFICAÇÃO ESSENCIAL: Só avança se o próximo passo realmente existe
        if (proximo) {
            proximo.classList.add('ativo');
        } else {
            console.error('ERRO CRÍTICO: O passo de destino não foi encontrado: ' + proximoPassoID);
            // Você pode adicionar um alerta aqui para debugging:
            // alert('Fim de jogo ou passo não encontrado. ID: ' + proximoPassoID);
        }
    });
});
