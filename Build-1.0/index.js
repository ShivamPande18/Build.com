var curInd = 0;
var totalInd = 2;

var forms = document.getElementsByClassName("formCont");
forms[0].style.display = "flex";
forms[1].style.display = "none";
forms[2].style.display = "none";

var formSec = document.getElementsByClassName("formSec")[0];
function changeCss() {
    if(this.scrollY > 500)
    {
        formSec.style.borderRadius = 0;
    }
    else{
        formSec.style.borderRadius = 100;
    }
    console.log(this.scrollY)
}
window.addEventListener("scroll", changeCss, false);


function OnNext(){
    if(curInd<totalInd)
    {
        forms[curInd].style.display = "none";
        curInd++;
        forms[curInd].style.display = "flex";
    }
}