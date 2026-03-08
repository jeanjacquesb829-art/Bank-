login(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

if(email==="Jeanjacques.B2026@gmail.com" && password==="Nabil2026B"){

document.getElementById("loginPage").style.display="none"
document.getElementById("app").style.display="flex"

generateTransactions()
createChart()
animateBalance()
aiAnalysis()

}else{

document.getElementById("error").innerText="Identifiants incorrects"

}

}

/* NAVIGATION */

function showSection(id){

document.querySelectorAll(".section").forEach(s=>{

s.style.display="none"

})

document.getElementById(id).style.display="block"

}

/* SOLDE */

let visible=true

function toggleBalance(){

let balance=document.getElementById("balanceValue")

if(visible){

balance.innerText="****"
visible=false

}else{

balance.innerText="2804 €"
visible=true

}

}

/* CARTE RETOURNEMENT */

function flipCard(){

document.getElementById("cardInner").classList.toggle("flip")

}

/* VIREMENT */

function blocked(){

notify("Transaction refusée : compte bloqué")

}

/* NOTIFICATION */

function notify(text){

let n=document.getElementById("notification")

n.innerText=text
n.style.display="block"

setTimeout(()=>{

n.style.display="none"

},3000)

}

/* SOLDE ANIME */

function animateBalance(){

let value=0
let target=2804

let el=document.getElementById("balanceValue")

let i=setInterval(()=>{

value+=40

if(value>=target){

value=target
clearInterval(i)

}

el.innerText=value+" €"

},30)

}

/* TRANSACTIONS */

function generateTransactions(){

let names=[

"Salaire","Amazon","Restaurant","Netflix",
"Transport","Essence","Apple","Supermarché",
"Pharmacie","Cinéma","Internet","Électricité"

]

let container=document.getElementById("transactions")

for(let i=0;i<50;i++){

let amount=(Math.random()*200).toFixed(2)
let type=Math.random()>0.5?"+":"-"

let div=document.createElement("div")

div.className="transaction"

div.innerHTML=`

<span>${names[Math.floor(Math.random()*names.length)]}</span>

<span class="${type==="+"?"plus":"minus"}">${type}${amount} €</span>

`

container.appendChild(div)

}

}

/* GRAPHIQUE REVOLUT */

function createChart(){

let ctx=document.getElementById("chart")

let chart=new Chart(ctx,{

type:"line",

data:{

labels:["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"],

datasets:[{

label:"Dépenses",

data:[40,80,30,90,50,70,60],

borderColor:"#22c55e",

fill:false

}]

}

})

}

/* IA ANALYSE */

function aiAnalysis(){

let text="IA : Vos dépenses principales sont la nourriture et les transports. Réduire les restaurants pourrait économiser 120 € par mois."

document.getElementById("aiText").innerText=text
}
