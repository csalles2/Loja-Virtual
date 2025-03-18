// Inicializa o Isotope
var $grid = $('.collection-list').isotope({
    itemSelector: '.col-md-6',
    layoutMode: 'fitRows'
});

// Filtra os itens ao clicar nos botões
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
});

// Função para resetar a classe ativa dos botões
function resetFilterBtns() {
    $('.filter-button-group button').each(function () {
        $(this).removeClass('active-filter-btn');
    });
}