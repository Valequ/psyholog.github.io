document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open")

    })

})

$(window).scroll(function () {
    $(".filtr").css("display", "none").fadeIn("fast");
    });