/* ==============================
   MOBILE MENU
============================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn && navLinks){

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

}


/* ==============================
   CLOSE MENU AFTER CLICK
============================== */

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

if(navLinks){
navLinks.classList.remove("active");
}

});

});


/* ==============================
   THEME SYSTEM
============================== */

const themes = {

redblack:{
bg:"#0D0D0D",
text:"#FFFFFF",
card:"#1A1A1A",
accent:"#FF2E2E"
},

cyberblue:{
bg:"#0F172A",
text:"#FFFFFF",
card:"#1E293B",
accent:"#38BDF8"
},

purpledark:{
bg:"#1A0F2E",
text:"#FFFFFF",
card:"#2A1A45",
accent:"#A855F7"
},

neongreen:{
bg:"#0B1A12",
text:"#FFFFFF",
card:"#13261C",
accent:"#39FF14"
}

};


/* APPLY THEME */

function applyTheme(theme){

document.documentElement.style.setProperty("--bg",theme.bg);
document.documentElement.style.setProperty("--text",theme.text);
document.documentElement.style.setProperty("--card",theme.card);
document.documentElement.style.setProperty("--accent",theme.accent);

}


/* THEME BUTTON */

const themeBtn = document.getElementById("themeBtn");

let themeNames = Object.keys(themes);

let index = 0;


/* LOAD SAVED THEME */

let savedTheme = localStorage.getItem("theme");

if(savedTheme && themes[savedTheme]){

applyTheme(themes[savedTheme]);

index = themeNames.indexOf(savedTheme);

}


/* CHANGE THEME */

if(themeBtn){

themeBtn.onclick = () => {

index++;

if(index >= themeNames.length){
index = 0;
}

let newTheme = themeNames[index];

applyTheme(themes[newTheme]);

localStorage.setItem("theme",newTheme);

};

}


/* ==============================
   SKILL CARDS
============================== */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

const header = card.querySelector(".skill-header");
const content = card.querySelector(".skill-content");
const close = card.querySelector(".close-btn");

if(content){
content.style.maxHeight = "0px";
}

/* TOGGLE OPEN */

if(header){

header.addEventListener("click", () => {

if(content.style.maxHeight === "0px" || content.style.maxHeight === ""){

content.style.maxHeight = content.scrollHeight + "px";
content.classList.add("open");

}else{

content.style.maxHeight = "0px";
content.classList.remove("open");

}

});

}

/* CLOSE BUTTON */

if(close){

close.addEventListener("click", (e) => {

e.stopPropagation();

content.style.maxHeight = "0px";
content.classList.remove("open");

});

}

});

