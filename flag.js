var h = $('.flagDelaunay').width();
for(var i = 0; i < h; i++){
    var flagElementDelaunay = $("<div class='flag-elementDelaunay'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('-webkit-animation-delay', i * 10 + 'ms');
    flagElement.css('-moz-animation-delay', i * 10 + 'ms');
    flagElement.css('-ms-animation-delay', i * 10 + 'ms');
    flagElement.css('animation-delay', i * 10 + 'ms');
    $('.flag').append(flagElement);
}

var h = $('.flagToussaint').width();
for(var i = 0; i < h; i++){
    var flagElementToussaint = $("<div class='flag-elementToussaint'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('-webkit-animation-delay', i * 10 + 'ms');
    flagElement.css('-moz-animation-delay', i * 10 + 'ms');
    flagElement.css('-ms-animation-delay', i * 10 + 'ms');
    flagElement.css('animation-delay', i * 10 + 'ms');
    $('.flag').append(flagElement);
}

var h = $('.flagChauvidan').width();
for(var i = 0; i < h; i++){
    var flagElementChauvidan = $("<div class='flag-element Chauvidan'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('-webkit-animation-delay', i * 10 + 'ms');
    flagElement.css('-moz-animation-delay', i * 10 + 'ms');
    flagElement.css('-ms-animation-delay', i * 10 + 'ms');
    flagElement.css('animation-delay', i * 10 + 'ms');
    $('.flag').append(flagElement);
}