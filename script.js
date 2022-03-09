var $p = $("p");
    var text = $p.text();
    var words = text.split(" ");
    newtext = "";
    $(words).each(function(i, el) {
      newtext += "<span class='slide-up'>" + el + "</span>" + " ";
      $p.delay(1000 * i).html(newtext)
    });

    ;

    // var str = $('p').text();
    //
    //
    // var spans = '<span class="slide-up">' + str.split(/\s+/).join(' </span><span>') + '</span>';
    //
    // $(spans).hide().appendTo('body').each(function(i) {
    //     $(this).delay(1000 * i).fadeIn();
    // });


