// for navigation bar
const menu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click",() => {
    navLinks.classList.toggle("nav-links-show")
})

// for type-writing effect in landing page
const TypeWriter = function(txtElement,words,wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.wordIndex = 0;
    this.isDeleting = false;
    this.txt = "";
    this.wait = parseInt(wait,10);
    this.type();
}

document.addEventListener("DOMContentLoaded",init);

// defining type method in constructor function
TypeWriter.prototype.type = function(){
    const current = this.wordIndex % this.words.length;
    const fullText = this.words[current];
    if(this.isDeleting){
        this.txt = fullText.substring(0,this.txt.length - 1);
    }
    else{
        this.txt = fullText.substring(0,this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class = "give-cursor">${this.txt}</span>`;

    // for typeSpeed thing
    let typeSpeed = 300;
    if(this.isDeleting){
        typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullText){
        typeSpeed = this.wait;
        this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === ""){
        typeSpeed = 500;
        this.wordIndex++;
        this.isDeleting = false;
    }
    setTimeout(() => this.type(),typeSpeed);
}

function init(){
    const txtElement = document.querySelector(".text-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    new TypeWriter(txtElement,words,wait)
}

