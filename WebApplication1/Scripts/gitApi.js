

$(document).ready(function () {    
    hideControl();
        $('#btnSubmit').click(function () {
        $('#repo').empty();
        $('#txtDetails').val("");
        var userName = $('#txtUser').val();
        
            var url = "https://api.github.com/users/" + userName + "/repos"            
            $.get(url, function (data, status) {
                    $.each(data, function (key, value) {
                        $('#repo').append($('<option>', { value: value.name, text: value.name }));
                    });
                    $('#repo').show();
                    $('#lblgit').show();
                    $('#repo').change(function () {
                        var a = $('#repo').val();
                        $.each(data, function (key, value) {
                            if (a == value.name) {                               
                                $('#txtDetails').val(JSON.stringify(value));
                            }
                        });
                        $('#txtDetails').show();
                        $('#lblDetails').show();
                    })             
            });
        })      
});

function hideControl()
{
    $('#repo').hide();
    $('#lblgit').hide();
    $('#lblDetails').hide();
    $('#txtDetails').hide();

}