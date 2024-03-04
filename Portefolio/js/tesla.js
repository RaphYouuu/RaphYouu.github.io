document.addEventListener('DOMContentLoaded', () => {
    let contact_menu = document.querySelector('.contact_menu')
    let about_menu = document.querySelector('.about_menu')
    let bar1 = document.querySelector('.bar1')
    let bar2 = document.querySelector('.bar2')
    let bar3 = document.querySelector('.bar3')
    let name = document.querySelector('.name')

contact_menu.addEventListener('mouseenter',function () { 
bar1.style.width = "100%"
});
contact_menu.addEventListener('mouseleave',function () { 
bar1.removeAttribute('style')
});
about_menu.addEventListener('mouseenter',function () { 
bar2.style.width = "100%"
});
about_menu.addEventListener('mouseleave',function () { 
   bar2.removeAttribute('style')
});
      about_menu.addEventListener('click',function(){
         document.body.classList.add('redirection')
         
         setTimeout(function() {
            window.location.href = "about.html";
            document.body.classList.remove('redirection')
        }, 500); 
      });
      name.addEventListener('click',function (){
         window.location.href = "index.html"
      });
      contact_menu.addEventListener('click',function(){
         document.body.classList.add('redirection')
         
         setTimeout(function() {
            window.location.href = "contact.html";
            document.body.classList.remove('redirection')
        }, 500); 
      });

});



window.onload = function() {
   window.scrollTo(0, 0);
};


window.addEventListener('scroll', function() {
   let menu = document.querySelector('.menu');
   let menu1 = document.querySelector('.menu1');
   let menu2 = document.querySelector('.menu2');
   const scrollPosition = window.scrollY;

   if (scrollPosition > 1940 && scrollPosition < 2400) {
      menu.style.color = 'black';
      menu1.style.color = 'black';
      menu2.style.color = 'black';
   }else {
      menu.style.color = 'white';
      menu1.style.color = 'white';
      menu2.style.color = 'white';
   }
 });
 
   window.addEventListener('load',function(){
      let image = document.querySelector('.image')
      image.style.opacity = 1

      let name = this.document.querySelector('.name')
      name.style.opacity = 1

   });
