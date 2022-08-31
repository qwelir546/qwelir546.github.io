
$(document).ready(function(){
    
    $(".preloader").css("display", "none"); 
    
    
        $('form').submit(function(event){
event.prreventDefault();
        
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
    
    
    const time = 3000;
    const step = 10;
    const step1 = 50;
    const step3 = 1;
    
    function outNum(num, element){
        let l = document.querySelector('#' + element);
        n = 0;
        let t = Math.round(time/(num/step));
        let interval = setInterval(() => {
            n = n + step;
            if(n == num){
clearInterval(interval);
            }
            l.innerHTML = n;
        }, t);
    };
    
        function outNum1(num1, element1){
        let l = document.querySelector('#' + element1);
        m = 0;
        let t = Math.round(time/(num1/step1));
        let interval = setInterval(() => {
            m = m + step1;
            if(m == num1){
clearInterval(interval);
            }
            l.innerHTML = m;
        }, t);
    };
    
    
    function outNum2(num2, element2){
        let l = document.querySelector('#' + element2);
        g = 0;
        let t = Math.round(time/(num2/step));
        let interval = setInterval(() => {
            g = g + step;
            if(g == num2){
clearInterval(interval);
            }
            l.innerHTML = g;
        }, t);
    };
    
    function outNum3(num3, element3){
        let l = document.querySelector('#' + element3);
        y = 0;
        let t = Math.round(time/(num3/step3));
        let interval = setInterval(() => {
            y = y + step3;
            if(y == num3){
clearInterval(interval);
            }
            l.innerHTML = y;
        }, t);
    };
    
    outNum(750, 'client');
    outNum1(3400, 'hours');
    outNum2(770, 'projects');
    outNum3(27, 'rewards');
    
   
    
    
    

    
    
    
    
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
    
    
    
    
    
    function calculate(){
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

function calculate(){
     let cost = parseInt($("#select option:selected").val()) + parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val());
    
    let days = parseInt($("#select option:selected").attr("days")) + parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days"));
    
    $(".price .cost").text(cost);
    $(".days .digit").text(days);
}

$("select").on("change", function(){
    calculate();
});
calculate();
    
    function say(){
        $(".btn-primary").click();
    }
    setTimeout(say, 10000);

    $(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
    
    
    
    $("#Mycom1").mask("+7(999) 999-9999");
    
    });






