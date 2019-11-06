let btn_1 = document.querySelector(".btn_1");
let a = 1;
btn_1.onclick = function(){
    if(a == 1){
        document.querySelector(".section2_content_box_1").style.animationName = "slidedown";
        document.querySelector(".btn_1").style.transform="rotate(180deg)";
        a = 0;
    }
    else if(a == 0){
        document.querySelector(".section2_content_box_1").style.animationName = "slideup";
        document.querySelector(".btn_1").style.transform="rotate(0deg)";
        a = 1;
    }
};



let btn_2 = document.querySelector(".btn_2");
let b = 1;
btn_2.onclick = function(){
    if(b == 1){
        document.querySelector(".section2_content_box_2").style.animationName = "slidedown"; 
        document.querySelector(".btn_2").style.transform="rotate(180deg)";
        b = 0;
    }
    else if(b == 0){
        document.querySelector(".section2_content_box_2").style.animationName = "slideup";
        document.querySelector(".btn_2").style.transform="rotate(0deg)";
        b = 1;
    }
};
let btn_3 = document.querySelector(".btn_3");
let c = 1;
btn_3.onclick = function(){
    if(c == 1){
        document.querySelector(".section2_content_box_3").style.animationName = "slidedown"; 
        document.querySelector(".btn_3").style.transform="rotate(180deg)";
        c = 0;
    }
    else if(c == 0){
        document.querySelector(".section2_content_box_3").style.animationName = "slideup";
        document.querySelector(".btn_3").style.transform="rotate(0deg)";
        c = 1;
    }
};
let btn_4 = document.querySelector(".btn_4");
let d = 1;
btn_4.onclick = function(){
    if(d == 1){
        document.querySelector(".section2_content_box_4").style.animationName = "slidedown"; 
        document.querySelector(".btn_4").style.transform="rotate(180deg)";
        d = 0;
    }
    else if(d == 0){
        document.querySelector(".section2_content_box_4").style.animationName = "slideup";
        document.querySelector(".btn_4").style.transform="rotate(0deg)";
        d = 1;
    }
};