const avanca = document.querySelectorAll('.btn-next')

avanca.forEach(buton => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo-' + this.getAtributte('data-proximo')

        atual.classList.remove('ativo')
        document.getElementById(proximoPasso).classList.add('ativo')
    })
})