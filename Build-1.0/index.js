var curInd = 0;
var totalInd = 2;

var forms = document.getElementsByClassName("formCont");
forms[0].style.display = "flex";
forms[1].style.display = "none";
forms[2].style.display = "none";
forms[3].style.display = "none";

var formSec = document.getElementsByClassName("formSec")[0];

var requirement = document.getElementById("requirement");
var budget = document.getElementById("budget");
var details = document.getElementById("details");



function changeCss() {
    if(this.scrollY > 500)
    {
        formSec.style.borderRadius = 0;
    }
    else{
        formSec.style.borderRadius = 100;
    }
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


function OnSubmit(){
    addDataToDatabase(requirement.value, budget.value, details.value);   
    forms[curInd].style.display = "none";
    curInd++;
    forms[curInd].style.display = "flex";
}