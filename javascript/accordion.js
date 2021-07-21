var buttons = document.getElementsByClassName("accordion");
var spanSelector = ".accordion>div>.accordion__question>span";
var svgSelector = ".accordion>div>.accordion__arrow>svg";
var i;

for(i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var panel = this.nextElementSibling;
        var span = this.querySelector(spanSelector);
        var arrow = this.querySelector(svgSelector);

        if (panel.style.display === "block") {
            span.className = "";
            arrow.className.baseVal= "" ;
            panel.style.display ="none";
        } else {
            arrow.className.baseVal = "accordion__arrow--active";
            span.className = "accordion__question--active";
            panel.style.display = "block";

        }
    });
}
