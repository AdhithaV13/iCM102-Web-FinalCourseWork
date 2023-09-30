let dCount;
let lCount; 

defaultBgColor();

function defaultBgColor(){
    if(dCount == 1){
        darkThemeEnabled();
    }else if(lCount == 1){
        lightThemeEnabled();
    }else{
        darkThemeEnabled();
    }
}

function lightThemeEnabled(){
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    let body3 = document.getElementById("body3");

    lCount = 1;
    dCount = 0;

    body3.setAttribute("style" , "background-color : white");
}

function darkThemeEnabled(){
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    let body3 = document.getElementById("body3");
    
    lCount = 0;
    dCount = 1;

    body3.setAttribute("style" , "background-color : #282323");
}

function pic1Clicked(){
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    let body3 = document.getElementById("body3");

    body3.setAttribute("style" , "background-image : assets/Backgrounds/1.jpg");
}

function pic2Clicked(){
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    let body3 = document.getElementById("body3");

    body3.setAttribute("style" , "background-image : assets/Backgrounds/2.jpg");
}

function pic3Clicked(){
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    let body3 = document.getElementById("body3");

    body3.setAttribute("style" , "background-image : assets/Backgrounds/3.jpg");
}

function pic4Clicked(){
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    let body3 = document.getElementById("body3");

    body3.setAttribute("style" , "background-image : assets/Backgrounds/4.jpg");
}

function pic5Clicked(){
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    let body3 = document.getElementById("body3");

    body3.setAttribute("style" , "background-image : assets/Backgrounds/5.jpg");
}

function pic6Clicked(){
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    let body3 = document.getElementById("body3");

    body3.setAttribute("style" , "background-image : assets/Backgrounds/6.jpg");
}

function pic7Clicked(){
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    let body3 = document.getElementById("body3");

    body3.setAttribute("style" , "background-image : assets/Backgrounds/7.jpg");
}

function pic8Clicked(){
    let body1 = document.getElementById("body1");
    let body2 = document.getElementById("body2");
    let body3 = document.getElementById("body3");

    body3.setAttribute("style" , "background-image : assets/Backgrounds/8.jpg");
}