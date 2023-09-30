function lightThemeEnabled(){
    let body = document.getElementById("body");
    let name = document.getElementById("name");
    let themes = document.getElementById("themes");
    let themeUnderline = document.getElementById("themeUnderline");
    let txtDarkTheme = document.getElementById("txtDarkTheme");
    let txtWhiteTheme = document.getElementById("txtWhiteTheme");
    let backgrounds = document.getElementById("backgrounds");
    let backgroundUnderline = document.getElementById("backgroundUnderline");
    let language = document.getElementById("language");
    let languageUnderline = document.getElementById("languageUnderline");

    body.setAttribute("style" , "background-color : white");
    name.setAttribute("style" , "color : white");
    themes.setAttribute("style" , "color : black");
    themeUnderline.setAttribute("style" , "background-color : black");
    txtDarkTheme.setAttribute("style" , "color : white");
    txtWhiteTheme.setAttribute("style" , "color : white");
    backgrounds.setAttribute("style" , "color : black");
    backgroundUnderline.setAttribute("style" , "background-color : black");
    language.setAttribute("style" , "color : black");
    languageUnderline.setAttribute("style" , "background-color : black");
}

function darkThemeEnabled(){
    let body = document.getElementById("body");
    let name = document.getElementById("name");
    let themes = document.getElementById("themes");
    let themeUnderline = document.getElementById("themeUnderline");
    let txtDarkTheme = document.getElementById("txtDarkTheme");
    let txtWhiteTheme = document.getElementById("txtWhiteTheme");
    let backgrounds = document.getElementById("backgrounds");
    let backgroundUnderline = document.getElementById("backgroundUnderline");
    let language = document.getElementById("language");
    let languageUnderline = document.getElementById("languageUnderline");

    body.setAttribute("style" , "background-color : #282323");
    name.setAttribute("style" , "color : #FF7A00");
    themes.setAttribute("style" , "color : white");
    themeUnderline.setAttribute("style" , "background-color : white");
    txtDarkTheme.setAttribute("style" , "color : black");
    txtWhiteTheme.setAttribute("style" , "color : black");
    backgrounds.setAttribute("style" , "color : white");
    backgroundUnderline.setAttribute("style" , "background-color : white");
    language.setAttribute("style" , "color : white");
    languageUnderline.setAttribute("style" , "background-color : white");
}