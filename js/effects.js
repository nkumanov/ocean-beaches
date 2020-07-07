
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip()
    $(".slide-section").click(function (e) { 
        var linkHref=$(this).attr("href");
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        },1000);

        e.preventDefault();
     });
    

     $("#palma-de-mallorca").click(function(e){
        e.preventDefault();
        var palmaCoordinates="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98401.51212562426!2d2.6355078956300093!3d39.58108537699496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297948706061e07%3A0xe1523779302cd452!2sNord%20de%20Palma%20District%2C%20Balearic%20Islands%2C%20Spain!5e0!3m2!1sen!2sbg!4v1593771233143!5m2!1sen!2sbg"
        
        if($("#googleMap").attr("src") !== palmaCoordinates){
            $("#googleMap").fadeOut().attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98401.51212562426!2d2.6355078956300093!3d39.58108537699496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297948706061e07%3A0xe1523779302cd452!2sNord%20de%20Palma%20District%2C%20Balearic%20Islands%2C%20Spain!5e0!3m2!1sen!2sbg!4v1593771233143!5m2!1sen!2sbg").fadeIn();
        }else{
            return false;
        }
        
     });

     $("#ibiza").click(function(e){
        e.preventDefault();
        var ibizaCoordinates="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17564.04714294811!2d1.417152092075628!3d38.903077105940845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129946bc6d9d1985%3A0xb6ca1af29357fa88!2s07800%20Ibiza%2C%20Balearic%20Islands%2C%20Spain!5e0!3m2!1sen!2sbg!4v1593770880524!5m2!1sen!2sbg"
        
        if($("#googleMap").attr("src") !== ibizaCoordinates){
            $("#googleMap").fadeOut().attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17564.04714294811!2d1.417152092075628!3d38.903077105940845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129946bc6d9d1985%3A0xb6ca1af29357fa88!2s07800%20Ibiza%2C%20Balearic%20Islands%2C%20Spain!5e0!3m2!1sen!2sbg!4v1593770880524!5m2!1sen!2sbg").fadeIn();
        }else{
            return false;
        }
        
     });

     $("#hawaii").click(function(e){
        e.preventDefault();
        var ibizaCoordinates="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14871.32634453975!2d-157.8404476084701!3d21.278133051706007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006df4e5c129af%3A0x4633ddc52a688878!2sWaikiki%2C%20Honolulu%2C%20HI%2096815%2C%20USA!5e0!3m2!1sen!2sbg!4v1593764408285!5m2!1sen!2sbg"
        
        if($("#googleMap").attr("src") !== ibizaCoordinates){
            $("#googleMap").fadeOut().attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14871.32634453975!2d-157.8404476084701!3d21.278133051706007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006df4e5c129af%3A0x4633ddc52a688878!2sWaikiki%2C%20Honolulu%2C%20HI%2096815%2C%20USA!5e0!3m2!1sen!2sbg!4v1593764408285!5m2!1sen!2sbg").fadeIn();
        }else{
            return false;
        }
        
     });
     
     

});

