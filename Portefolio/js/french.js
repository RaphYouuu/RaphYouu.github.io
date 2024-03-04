document.addEventListener('DOMContentLoaded', () => {
    let contact = document.querySelector('.contact')
    let contact_container = document.querySelector('.contact_container')
    let contact_menu = document.querySelector('.contact_menu')
    let about_menu = document.querySelector('.about_menu')
    let english_menu = document.querySelector('.english_menu')
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
english_menu.addEventListener('mouseenter',function () { 
bar3.style.width = "100%"
});
english_menu.addEventListener('mouseleave',function () { 
bar3.removeAttribute('style')
});

      about_menu.addEventListener('click',function(){
         document.body.classList.add('redirection')
         
         setTimeout(function() {
            window.location.href = "about-fr.html";
            document.body.classList.remove('redirection')
        }, 500); 
      });
      name.addEventListener('click',function (){
         window.location.href = "index.html"
      });
      english_menu.addEventListener('click',function () { 
         window.location.href = "index.html"
      })

      window.onload = function() {
         window.scrollTo(0, 0);
     };


});