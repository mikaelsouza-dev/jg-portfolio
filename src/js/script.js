(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

// Obtém uma referência para cada filtro
const allFilter = document.querySelector('.filter[data-filter="all"]');
const flyerFilter = document.querySelector('.filter[data-filter=".flyer"]');
const anunciosFilter = document.querySelector('.filter[data-filter=".anuncios"]');
const motionsFilter = document.querySelector('.filter[data-filter=".motions"]');

// Obtém uma referência para todos os elementos que serão filtrados
const items = document.querySelectorAll('.mix');

// Adiciona um ouvinte de evento de clique para cada filtro
allFilter.addEventListener('click', () => {
    // Remove a classe 'active' de todos os filtros
    removeActiveClassFromFilters();
    // Adiciona a classe 'active' ao filtro 'All'
    allFilter.classList.add('active');
    // Mostra todos os itens
    showAllItems();
});

flyerFilter.addEventListener('click', () => {
    removeActiveClassFromFilters();
    flyerFilter.classList.add('active');
    flyerFilter.style.display = 'inline-block'
    // Esconde todos os itens
    hideAllItems();
    // Mostra apenas os itens da categoria 'flyer'
    showItems('.flyer');
});

anunciosFilter.addEventListener('click', () => {
    removeActiveClassFromFilters();
    anunciosFilter.classList.add('active');
    hideAllItems();
    showItems('.anuncios');
});

motionsFilter.addEventListener('click', () => {
    removeActiveClassFromFilters();
    motionsFilter.classList.add('active');
    hideAllItems();
    showItems('.motions');
});

// Função auxiliar para remover a classe 'active' de todos os filtros
function removeActiveClassFromFilters() {
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => filter.classList.remove('active'));
}

// Função auxiliar para mostrar todos os itens
function showAllItems() {
    items.forEach(item => item.style.display = 'block');
}

// Função auxiliar para esconder todos os itens
function hideAllItems() {
    items.forEach(item => item.style.display = 'none');
}

// Função auxiliar para mostrar itens de uma determinada categoria
function showItems(category) {
    const filteredItems = document.querySelectorAll(category);
    filteredItems.forEach(item => item.style.display = 'block');
}


})(jQuery);

