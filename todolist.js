
    $("ul").on("click", "li",function(){
$(this).toggleClass("completed");
    });



    $("ul").on("click", "span",function(event){
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
        event.stopPropagation();
    });
    

    $('input[type="text"]').keypress(function(event){
        if(event.which === 13){
        let todoInput = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append(`<li><span><i class="fas fa-plus"></</span> ${todoInput} </li>`)
        }
    })

    $(".fa-plus").on("click",function(){
$("input[type='text']").fadeToggle();
    })
