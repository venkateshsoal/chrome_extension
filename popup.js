$(document).ready(
    function(){
        $('#addTodo').click(
            function(){
                var userText = $('input[name=Listitem]').val();
                // update list here
                $("ol").append("<li>"+ $("#userText").val() +"</li>")
            }
        )
    }
);

$(document).on('dblclick', 'li',function(){
    $(this).toggleClass('strike').fadeOut('slow');
   
});

$(document).on('click','li', function(){
    $(this).toggleClass("highlight");
});