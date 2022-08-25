"use strict"

$(document).ready(function(){
    $(".preloader").css("display", "none");  
    
    
    /*
    
    $("h2 + p").css("border", "2px solid red");
    
    $("").text("lorem icum aber tenbich goul raprich it hatab");
    
    $('a[href = "https://google.com"]').css("border", "1px solid green");
    
    $("input").keyup(function(){
        $(".key").text("Hi, " + $(this).val());
     });
    
    $(".lorem").click(function(){
        $(this).delay(500).animate({opacity: "0.25"}).delay(500).hide(1000).delay(500).show(1000).delay(500).animate({opacity: "1"});
    });
    $(".img").click(function(){
        $(this).fadeOut(500, function(){
            $(this).attr("src", "img/ракета.png").fadeIn(500);
        })  
    })
    
  

    
    
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
 
    

   
    $("a[href^='#']").click(function(){
let valHref = $(this).attr("href");
        $("html, body").animate({scrollTop: $(valHref). offset().top - 100 + "px"});

});
    */

let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $("animation");
elements.each((i, el) => {
observer.observe(el);
});

    
function onEntry (entry){
entry.forEach(change => {
if (change.inIntersecting){
    change.target.classList.add("animation")
}
});
}

    
    
    
    
        window.alert = (message) => {
        $('#PromiseAlert .modal-body p').html(message);
        var PromiseAlert = $('#PromiseAlert').modal({
            keyboard: false,
            backdrop: 'static'
        }).modal('show');
        return new Promise(function (resolve, reject) {
            PromiseAlert.on('hidden.bs.modal', resolve);
        });
    };
});