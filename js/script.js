// Typing Effect

const words = [
    "Web Developer",
    "CSE Student",
    "Frontend Designer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function type() {

    if (!typingElement) return;

    if(charIndex < words[wordIndex].length){

        typingElement.textContent +=
        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }else{
        setTimeout(erase,1500);
    }
}

function erase(){

    if(charIndex > 0){

        typingElement.textContent =
        words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(type,300);
    }
}

type();

function toggleDetails(id, button){

    const details =
    document.getElementById(id);

    details.classList.toggle("show");

    if(details.classList.contains("show")){
        button.innerText = "Read Less";
    }
    else{
        button.innerText = "Read More";
    }

}
// Hamburger Menu

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if(menuBtn && navLinks){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}
