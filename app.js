$.get('http://aerial-valor-93012.appspot.com/challenge', function(response) {
    response = $.parseJSON(response);

    var sum = 0;
    for(var i = 0; i < response.values.length; ++i) {
        sum += response.values[i];
    }

    $.get('http://aerial-valor-93012.appspot.com/challenge/' + response.token + '/' + sum, function(response) {
        response = $.parseJSON(response);
        console.log(response.answer);
    });
});