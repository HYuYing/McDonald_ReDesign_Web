let btn_left = document.querySelector(".section2_news_img_left");
let btn_center = document.querySelector(".section2_news_img_center");
let btn_right = document.querySelector(".section2_news_img_right");
btn_left.onclick = function(){
    document.querySelector(".img1").style.opacity="1";
    document.querySelector(".img2").style.opacity="0.5";
    document.querySelector(".section2_news_img_left").style.animationName = "left-center";
}
btn_center.onclick = function(){
    if(document.querySelector(".section2_news_img_left").style.marginLeft="100%"){
        document.querySelector(".section2_news_img_left").style.animationName = "center-left";
    }
    if(document.querySelector(".section2_news_img_right").style.marginRight="100%"){
        document.querySelector(".section2_news_img_right").style.animationName = "center-right";
    }
    document.querySelector(".img1").style.opacity="0.5";
    document.querySelector(".img2").style.opacity="1";
    document.querySelector(".img3").style.opacity="0.5";
    
}
btn_right.onclick = function(){
    document.querySelector(".img3").style.opacity="1";
    document.querySelector(".img2").style.opacity="0.5";
    document.querySelector(".section2_news_img_right").style.animationName = "right-center";
}


