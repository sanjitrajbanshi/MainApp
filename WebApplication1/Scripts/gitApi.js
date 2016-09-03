

$(document).ready(function () {
    hideControl();
    //on submit button click call the list of all github repos displays on combo box
    $('#btnSubmit').click(function () {
        $('#repo').empty();
        $('#txtDetails').val("");
        var userName = $('#txtUser').val();
        var url = "https://api.github.com/users/" + userName + "/repos";
        //call the github api list of repository for the given user
        var result = $.get(url);
        result.success(function (data) {
            $.each(data, function (key, value) {
                $('#repo').append($('<option>', { value: value.key, text: value.name }));
            });
            $('#repo').show();
            $('#lblgit').show();
            $('#repo').change(function () {
                var repoName = $('#repo').val();
                $.each(data, function (key, value) {
                    if (repoName == value.name) {
                        $('#txtDetails').val(JSON.stringify(value));
                    }
                });
                $('#txtDetails').show();
                $('#lblDetails').show();
            });
        });

        result.error(function (jqXHR, textStatus, errorThrown) {
            alert("Enter valid user-"+errorThrown);
        });

    });


});
    function hideControl() {
        $('#repo').hide();
        $('#lblgit').hide();
        $('#lblDetails').hide();
        $('#txtDetails').hide();

    }
