
$(document).ready(function(){
    
    $(".preloader").css("display", "none"); 
    
    
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
    
        
                
    $(window).scroll(() => {
        
        let scrollDist = $(window).scrollTop();
        
        $(".section").each((i, el) => {
            
            if($(el).offset().top - $("nav").outerHeight() <= scrollDist){
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')){
                        $(el).removeClass('active');
                    }
                });
                
                $('nav li:eq('+ i +')').find('a').addClass('active');
            }
            
        });  
});

    
    
var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 200) {
      if (cc < 2) {
        $(".number").addClass("viz");
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});
    
    async function calculate(){
               let sum = parseInt$("#select option:selected").attr("value") + parseInt$("#select1 option:selected").attr("value") + parseInt$("#select2 option:selected").attr("value");
       
       let days = parseInt$("#select option:selected").attr("days") + parseInt$("#select1 option:selected").attr("days") + parseInt$("#select2 option:selected").attr("days");

        $(".time").text("Сроки:" + days);
        $(".cost").text("Стоимость:" + sum);
    };
    
    $("select").on("change", function(){
        calculate();

    });



    $("a[href^='#']").click(function(){
let valHref = $(this).attr("href");
        $("html, body").animate({scrollTop: $(valHref). offset().top - 100 + "px"});



        
 /*
        let option = {threshold: [0.7]};
        let observer = new IntersectionObserver(onEntry, option);
        let elements = $('.icon');
        elements.each((i, el) => {
            observer.observe(el);
        });
        
        function onEntry(entry){
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('.icon_animate')
                }
            });
        }
        
*/
        
        
        $(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});


});


async function calculate(){
     let cost = parseInt($("#select option:selected").val()) + parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val());
    
    let days = parseInt($("#select option:selected").attr("days")) + parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days"));
    
    $(".price .cost").text(cost);
    $(".days .digit").text(days);
}

    
$("select").on("change", function(){
    calculate();
});
calculate();
    
    
    $(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
    
    
    
    $("#Mycom1").mask("+7(999) 999-9999");
    
    });






