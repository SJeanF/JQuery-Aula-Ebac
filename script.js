$(document).ready(function() {
    
    $('header button').click(function() {
            $('form').slideDown()
    })
    
    $('form').on('reset', function(){
        $('form').slideUp()
    })


    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoNovaImg = $('#endereco-nova-imagem').val()
        const novoItem = $('<li style="display:none;"></li>')
        $(`<img src="${enderecoNovaImg}"/>`).appendTo(novoItem)
        $(`<div class="overlay-imagem-link">
                <a href="${enderecoNovaImg}" target="_blank" tittle="Ver imagem em tamanho real">
                Ver imagem em tamanho real
                </a>
            </div>"'`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn()
        $('#endereco-nova-imagem').val('')

    })
})

