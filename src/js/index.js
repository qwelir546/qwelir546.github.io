$(document).ready(function(){
    
var modal = document.getElementById('myModal');

var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function()
{
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img01.onclick = function()
{
    modal.style.display = "none";
}

    function calculate(){
    var price = parseInt($('#select option:selected').val()) + parseInt($('#select1 option:selected').val()) + parseInt($('#select2 option:selected').val());
    var terms = parseInt($('#select option:selected').attr('days')) + parseInt($('#select1 option:selected').attr('days')) + parseInt($('#select2 option:selected').attr('days'));
    
    $(".total1 .digit").text(price);
    $(".total .time").text(terms);
        
    }

    select.onclick = function(){
        calculate();
    }
     select1.onclick = function(){
        calculate();
    }
      select2.onclick = function(){
        calculate();
    }
     
      
       $("a[href^='#']").click(function(){
let valHref = $(this).attr("href");
        $("html, body").animate({scrollTop: $(valHref). offset().top - 85 + "px"});
});
    
     $("#Mycom1").mask("+7(999) 999-9999"); 

    
            $('form').submit(function(event){
                event.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            alert("Сообщение успешно отправлено");
            $("form").trigger("reset");
        });
        return false;
    });



});
