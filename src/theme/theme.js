const whiteT = "#ffffff";
const blackT = "#000000";
const greyBg = "#696969";
const navBg = "#d788be";
const mainT = "#ffccff";
const bgLight= "#cccccc";
const bgDark ="#696969";
const navLinkColor ="#330000";
const navHover = "#ff0000";
const silver= "#bdc3c7";
const navH1 = "#ccd419";
const navText ="#800080";


const bgColorLight = bgLight;
const bgColorDark = bgDark;
const textColor = blackT;
const linkColorNav = navLinkColor;
const navLinkHover = navHover;
const navbg = navBg;
const navH= navH1;

const lightTheme ={
    colors:{
        bgColorLight,
        textColor,
        linkColorNav,
        navLinkHover,
        navbg,
        silver,
        blackT,
        greyBg,
        mainT,
        navH,
        navText

    }
};

const darkTheme =JSON.parse(JSON.stringify(lightTheme));
darkTheme.colors.bgColorDark=bgDark;
darkTheme.colors.textColor =whiteT;
export {lightTheme,darkTheme}











