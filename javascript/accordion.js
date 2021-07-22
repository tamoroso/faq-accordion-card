var buttons = document.getElementsByClassName("accordion");
var spanSelector = ".accordion>div>.accordion__question>span";
var svgSelector = ".accordion>div>.accordion__arrow>svg";
var i;

for(i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var panel = this.nextElementSibling;
        var span = this.querySelector(spanSelector);
        var arrow = this.querySelector(svgSelector);
        console.log(panel.classList.value === "accordion__panel accordion__panel--folded");

        if (panel.classList.value === "accordion__panel accordion__panel--active") {
            span.className = "";
            arrow.className.baseVal= "" ;
            panel.classList.replace("accordion__panel--active","accordion__panel--folded");
        } else {
            arrow.className.baseVal = "accordion__arrow--active";
            span.className = "accordion__question--active";
            panel.classList.replace("accordion__panel--folded","accordion__panel--active") ;

        }
    });
}
