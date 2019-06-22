// Usage
$(document).ready(function() {
    // get the API result via jQuery.ajax
    $.ajax({
        url: 'findUserLanguage.php',   
        dataType: 'html',
        success: function(languageData) {
            
            if(languageData == 'zh')
            {
                $('.us').hide();
                $('.zh').show();

                $('#lng_select_mobile_child').find('ul').find('li:nth-child(1)').removeClass('selected');
                $('#lng_select_mobile_child').find('ul').find('li:nth-child(2)').addClass('selected');
                $('#lng_select_mobile_child').find('ul').find('li:nth-child(2)').click();

                $('#lng_select_child').find('ul').find('li:nth-child(1)').removeClass('selected');
                $('#lng_select_child').find('ul').find('li:nth-child(2)').addClass('selected');
                $('#lng_select_child').find('ul').find('li:nth-child(2)').click();
            }
            else
            {
                $('.zh').hide();
            }
            
        }
    });
});


