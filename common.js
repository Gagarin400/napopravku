// open modal
var wrap = $('main'),
btn = $('.start-form-btn'),
modal = $('.cover, .modal, .modal-content');

btn.on('click', function() {
    modal.fadeIn();
});
// close modal
$('.modal-close').click(function() {
    modal.fadeOut();
});
//add chronic
$('form').on("submit", function(){
    event.preventDefault();
})
$('#chronic').change(function(e) {
    let value = $('#chronic').val();
    $('.chronic-item-box').append('<div class="chronic-item"><span>'+value+'</span><img src="img/chronic-delete.png" alt="delete"></div>');
    $('#chronic').val('');
});
//delete_chronic 
$(document).on('click','.chronic-item img', function() {
    $(this).parent().remove();
})
// RadioButton
$('input[type="radio"]').each(function() {
	$(this).click(function(){
        $('.form-row input[type="radio"]').prop('checked', false);
        $(this).prop('checked', 'true');
	})
});