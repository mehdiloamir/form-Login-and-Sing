// title web 
const Title1 = document.getElementById("title");
Title1.innerHTML=("Web-cv-AMM");



// topic h3 web
const H3Topic = document.getElementById("Topic") ;
//loginform
const FormLog = document.getElementById("form-logg");
const formSing = document.getElementById("formsing");
// span H3

function Logbtn(){
    H3Topic.innerHTML=("LOGIN ");
    FormLog.style.display=('block');
    formSing.style.display=('none');
}

function Singbtn(){
    H3Topic.innerHTML=("SINGUP");
    FormLog.style.display=('none');
    formSing.style.display=('block');

}








