$.fn.deactivate = function(){
    return this.each(function(){
        var new_div = $(document.createElement('div'))
            .height($(this).height())
            .width($(this).width())
            .addClass("inactive-layer")

        $(this).prepend(new_div);
    });
}
