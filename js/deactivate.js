$.fn.deactivate = function(){
    $('head').append('<link href="css/deactivate.css" rel="stylesheet" type="text/stylesheet" />');
    return this.each(function(){
        var new_div = $(document.createElement('div'))
            .height($(this).height())
            .width($(this).width())
            .addClass("inactive-layer")

        $(this).prepend(new_div);
    });
}
