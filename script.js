$( document ).ready(function() {
    $('.burgerBtn').click(function(e) {
        e.preventDefault();
        $('.navigation').toggleClass('hidden')
    });
});
