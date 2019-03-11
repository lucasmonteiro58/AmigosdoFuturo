var valor;

/* Show Delete*/
$(function(){
    $('.btn3').click(function(){
        var $pai = $(this).parent().parent();
        valor = $pai.find('[name="post"]').val();
        
        $('.want-delete').show();

        //Não deixa submeter 
        $("form").submit(function(e){
            e.preventDefault(e);
        });
    });
});

/*Confirmar Delete*/
$(function(){
    $('#yesD').click(function(){
        if(typeof valor !== "undefined"){
            window.location.href = "php/control/deletePost.php?del="+valor;
        }else{
            window.location.href = "index.php";
        }

        $('.want-delete').hide(); 
    });
    $('#noD').click(function(){
        $('.want-delete').hide(); 
    });
});

/* Show Post*/
$(function(){
    $('.btn1').click(function(){
        var $pai = $(this).parent().parent();
        valor = $pai.find('[name="post"]').val();
        
        if(typeof valor !== "undefined"){
            window.location.href = "http://www.petcomp.ufc.br";
        }else{
            window.location.href = "index.php";
        }
        
        //Não deixa submeter 
        $("form").submit(function(e){
            e.preventDefault(e);
        });
    });
});

/*Confirmar Logout*/
$(function(){
    $('#yes').click(function(){
          window.location.href = "php/control/logout.php";
    });
    $('#no').click(function(){
        $('.want-logout').hide(); 
    });
});

/*Arquivo vazio*/
$(function(){
    $('#yesF').click(function(){
        $('.file-alarm').hide(); 
    });
});

//Visualizar Capa
$(function(){
    $('#ver_capa').click(function() {
        $('#myModal').css("display","block");
    });
});

$(function(){
    $('.close').click(function() {
        $('#myModal').css("display","none");
    });
});