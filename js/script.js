// navbar toogle 

 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    const contactBtn = document.querySelector(".contact-btn");
    nav.classList.toggle("open");
    
      if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
       navToggler.innerHTML = 'Close'; 
       contactBtn.style.left = "100px";
       
       }
     else{
    	nav.removeAttribute("style");
       navToggler.innerHTML = 'Menu';
   contactBtn.removeAttribute("style");
   
   }
    } ;

   //creating li el

 const app = document.querySelector('#list');

 const langs = [''];
 
 const nodes = langs.map(lang => {
     const li = document.createElement('li');
     const buttonFR = document.createElement("a");
     buttonFR.setAttribute("class", "fr")
     const buttonEN = document.createElement("a");
     buttonEN.setAttribute("class", "en")
     buttonEN.innerHTML = "EN"
     buttonFR.innerHTML = "FR";
     li.appendChild(buttonFR);
     li.appendChild(buttonEN);
     
     return li;
 });
 
 app.prepend(...nodes);

