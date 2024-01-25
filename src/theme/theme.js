const whiteT = "#ffffff";
const blackT = "#000000";
const greyBg = "#696969";
const navBg = "#faebd7";
const mainT = "#ffccff";
const bgLight= "#f5f5dc";
const bgDark ="#696969";
const navLinkColor ="#330000";
const navHover = "#fd0b70";
const silver= "#bdc3c7";
const navH1 = "#e90460";
const navText ="#830539";
const footerTexrColor = "#1c0f45";
const sectionCardbg = "#c1cdc1";
const slideColor = "#eed2ee";
const slideTextColor = "#800080";


const bgColorLight = bgLight;
const bgColorDark = bgDark;
const textColor = blackT;
const linkColorNav = navLinkColor;
const navLinkHover = navHover;
const navbg = navBg;
const navH= navH1;
const footerColor = footerTexrColor;
const sectionBgColor = sectionCardbg;
const SlideBgColor = slideColor;
const SlideText = slideTextColor;

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
        navText,
        footerColor,
        sectionBgColor,
        SlideBgColor ,
        SlideText

        

    }
};

const darkTheme =JSON.parse(JSON.stringify(lightTheme));
darkTheme.colors.bgColorDark=bgDark;
darkTheme.colors.textColor =whiteT;
export {lightTheme,darkTheme}











