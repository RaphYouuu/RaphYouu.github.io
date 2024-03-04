document.addEventListener('DOMContentLoaded', () => {
    let contact_menu = document.querySelector('.contact_menu')
    let about_menu = document.querySelector('.about_menu')
    let home_menu = document.querySelector('.home_menu')
    let bar1 = document.querySelector('.bar1')
    let name = document.querySelector('.name')
    let menu = document.querySelector('.menu')
    let h1 = document.getElementById('h1')
    let text = document.querySelector('.text')

contact_menu.addEventListener('mouseenter',function () { 
let bar3 = document.querySelector('.bar3')
bar3.style.width = "100%"
});
contact_menu.addEventListener('mouseleave',function () { 
let bar3 = document.querySelector('.bar3')
bar3.removeAttribute('style')
});
home_menu.addEventListener('mouseenter',function(){
   menu.style.opacity = "100%"
   bar1.style.width = "100%"
   home_menu.addEventListener('mouseleave',function(){
      menu.removeAttribute('style')
      bar1.removeAttribute('style')
   });
});

      about_menu.addEventListener('click',function(){
         document.body.classList.add('redirection1')
         
         setTimeout(function() {
            window.location.href = "about.html";
            document.body.classList.remove('redirection')
        }, 500); 
      });
      name.addEventListener('click',function (){
         window.location.href = "index.html"
      });
      home_menu.addEventListener('click',function(){
         document.body.classList.add('redirection1')

         setTimeout(function() {
            window.location.href = "index.html";
            document.body.classList.remove('redirection1')
        }, 500); 
      });
      contact_menu.addEventListener('click',function(){
         window.location.href = "contact.html"
      });
   
       window.addEventListener('load', function(){
         text.style.filter = 'blur(0)';
         text.style.opacity = "100%"
         name.style.transform = "translateX(0)"
         name.style.opacity = 1;
         name.style.filter = 'blur(0)'
         h1.style.opacity = "100%"
         h1.style.filter = "blur(0)"
         let about_text = this.document.querySelector('.about_text')
         about_text.style.opacity = 1
         about_text.style.filter = 'blur(0)'
       });


});