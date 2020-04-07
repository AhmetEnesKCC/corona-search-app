window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrolltop > 10 || document.documentElement.scrollTop > 10) {
       document.getElementById("topbtn").className = "show"
    } else {
        document.getElementById("topbtn").className = "hide"
    }
}