$(document).ready(function() {
    $('input').blur(function() {
    if($(this).val().trim() === '') {
        $(this).css('background-color', 'red');
    }
});
$('input').focus(function() {
    $(this).css('background-color', 'lightblue');
})});