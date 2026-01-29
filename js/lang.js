let LANG="fr";
const LANG_DATA={
fr:{title:"Calculateur The Forge",calc:"Calculer"},
en:{title:"The Forge Calculator",calc:"Calculate"}
};
function setLang(l){
LANG=l;
document.getElementById("title").innerText=LANG_DATA[l].title;
document.getElementById("calcBtn").innerText=LANG_DATA[l].calc;
}