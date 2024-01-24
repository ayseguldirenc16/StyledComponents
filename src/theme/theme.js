const whiteT = "#ffffff";
const blackT = "#000000";
const greyBg = "#696969";
const navBg = "#051c33";
const mainT = "#ffccff";
const bgLight= "#cccccc";
const bgDark ="#696969";
const navLinkColor ="#330000";
const navHover = "#fd0b70";
const silver= "#bdc3c7";
const navH1 = "#e90460";
const navText ="#830539";
const footerTexrColor = "#fd0b70";
const sectionCardbg = "#d3e8fa";


const bgColorLight = bgLight;
const bgColorDark = bgDark;
const textColor = blackT;
const linkColorNav = navLinkColor;
const navLinkHover = navHover;
const navbg = navBg;
const navH= navH1;
const footerColor = footerTexrColor;
const sectionBgColor = sectionCardbg;

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
        sectionBgColor
        

    }
};

const darkTheme =JSON.parse(JSON.stringify(lightTheme));
darkTheme.colors.bgColorDark=bgDark;
darkTheme.colors.textColor =whiteT;
export {lightTheme,darkTheme}











