//FormSubmit
$(document).ready(function () {
    $("form").unbind('submit').on('submit', function(event) {
        var formID = $(this).attr('id'); // Получение ID формы
        var formNm = $('#' + formID);
        $.ajax({
            type: 'POST',
            url: '/mailer/mail.php', // Обработчик формы отправки
            data: formNm.serialize(),
            success: function (data) {
              jQuery(formNm)[0].reset();
              $('.jquery-modal').removeClass('blocker');
              $('body').removeAttr( "style" );
              $('#ex1').removeAttr( "style" );
            }
        });
        return false;
    });
});