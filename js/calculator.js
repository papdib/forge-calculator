const selects=["ore1","ore2","ore3","ore4"];
function initSelectors(){
selects.forEach(id=>{
let s=document.getElementById(id);
Object.entries(ORES).forEach(([n,m])=>{
let o=document.createElement("option");
o.value=n;o.text=n+" ("+m+"x)";
s.appendChild(o);
});
});
}
setTimeout(initSelectors,200);

function calculate(){
let list=[];
selects.forEach((id,i)=>{
let ore=document.getElementById(id).value;
let q=parseInt(document.getElementById("q"+(i+1)).value)||0;
if(q>0) list.push({ore,q,m:ORES[ore]});
});
let total=list.reduce((s,o)=>s+o.q,0);
if(total<3){result.textContent="Minimum 3 minerais";return;}
let avg=list.reduce((s,o)=>s+o.q*o.m,0)/total;
let txt=`Total: ${total}\nMultiplicateur: ${avg.toFixed(2)}x\n\n`;
list.forEach(o=>{
let p=o.q/total*100;
txt+=`${o.ore}: ${p.toFixed(1)}% Trait ${p>=10?"OK":"OFF"}\n`;
});
let probs=PROB_DATA.weapon[Object.keys(PROB_DATA.weapon)[0]];
txt+="\nProbabilités:\n";
for(let k in probs) txt+=`${k}: ${(probs[k]*100).toFixed(1)}%\n`;
result.textContent=txt;
}