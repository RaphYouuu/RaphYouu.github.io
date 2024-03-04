document.addEventListener('DOMContentLoaded', () => {
    let contact = document.querySelector('.contact')
    let contact_container = document.querySelector('.contact_container')
    let contact_menu = document.querySelector('.contact_menu')
    let about_menu = document.querySelector('.about_menu')
    let french_menu = document.querySelector('.french_menu')
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
french_menu.addEventListener('mouseenter',function () { 
bar3.style.width = "100%"
});
french_menu.addEventListener('mouseleave',function () { 
bar3.removeAttribute('style')
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
      french_menu.addEventListener('click',function () { 
         window.location.href = "index-fr.html"
      })
      contact_menu.addEventListener('click',function(){
         document.body.classList.add('redirection')
         
         setTimeout(function() {
            window.location.href = "contact.html";
            document.body.classList.remove('redirection')
        }, 500); 
      });


});