document.addEventListener('DOMContentLoaded', () => {
    let contact_menu = document.querySelector('.contact_menu')
    let about_menu = document.querySelector('.about_menu')
    let bar1 = document.querySelector('.bar1')
    let bar2 = document.querySelector('.bar2')
    let name = document.querySelector('.name')
   let img2 = document.querySelector('.img2')
   let img1 = document.querySelector('.img1')
   let img3 = document.querySelector('.img3')


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
      
      img1.addEventListener('mouseenter',function(){
         let im1 = document.getElementById('img1')
         let seeprojects = document.querySelector('.seeprojects')
         seeprojects.style.visibility = "visible"
         seeprojects.style.opacity = "100%"
         im1.style.transform = "scale(1.03)"
            img1.addEventListener('mouseleave',function(){
               im1.removeAttribute('style')
               seeprojects.style.opacity = "0"
               setTimeout(() => {
                  seeprojects.removeAttribute('style')
              },300)
            });   
      });
      img2.addEventListener('mouseenter',function(){
         let im2 = document.getElementById('img2')
         let seeprojects_tesla = document.querySelector('.seeprojects_tesla')
         im2.style.transform ="scale(1.03 )"
         seeprojects_tesla.style.visibility = "visible"
         seeprojects_tesla.style.opacity = "100%"
            img2.addEventListener('mouseleave',function(){
               im2.removeAttribute('style')
               seeprojects_tesla.style.opacity = "0"
               setTimeout(() => {
                  seeprojects_tesla.removeAttribute('style')
              },300)
            });
      });
      img3.addEventListener('mouseenter',function(){
         let im3 = document.getElementById('img3')
         let seeprojects_1 = document.querySelector('.seeprojects_1')
         seeprojects_1.style.visibility = "visible"
         seeprojects_1.style.opacity = "100%"
         im3.style.transform ="scale(1.03 )"
         img3.addEventListener('mouseleave',function(){
            let im3 = document.getElementById('img3')
            let seeprojects_1 = document.querySelector('.seeprojects_1')
            im3.removeAttribute('style')
            seeprojects_1.style.opacity = "0"
            setTimeout(() => {
               seeprojects_1.removeAttribute('style')
           },300)
         });
      })
      window.addEventListener('load',function(){
         window.scrollTo (0,0)
         let start_title = this.document.querySelector('.start_title')
         let start_text = this.document.querySelector('.start_text')
         start_title.style.visibility = "hidden"
         start_text.style.visibility = "hidden"
         setTimeout(() => {
            let hidden = this.document.querySelector('.hidden')
            hidden.classList.add('start_animation')
            let start_title = this.document.querySelector('.start_title')
            start_title.style.visibility = "visible"
         },1000)
         setTimeout(() => {
            let start_text = this.document.querySelector('.start_text')
            start_text.style.visibility = "visible"
            let hidden1 = this.document.querySelector('.hidden1')
            hidden1.classList.add('start_animation')
         },1500)
         setTimeout(() => {
            let start_page = this.document.querySelector('.start_page')
            start_page.classList.add('start_anim')
         },4000)
         setTimeout(() => {
            let start_page = this.document.querySelector('.start_page')
            let hide = this.document.querySelector('.hide')
            let hide1 = this.document.querySelector('.hide1')
            let start_text = this.document.querySelector('.start_text')
            let start_title = this.document.querySelector('.start_title')
            hide.style.visibility = "hidden"
            hide1.style.visibility = "hidden"
         },4000)
         this.setTimeout(() => {
            let start_page = this.document.querySelector('.start_page')
            start_page.style.visibility = "hidden"
         },4300)
         this.setTimeout(() => {
            start_text.style.visibility = "hidden"
            start_title.style.visibility = "hidden"
         },5000)
         this.setTimeout(() => {
            let start_page = this.document.querySelector('.start_page')
            start_page.parentNode.removeChild(start_page)
         },5000);
      })
});
img2.addEventListener('click',function(){
      window.location.href = "tesla.html"
});
gsap.registerPlugin(Flip)
gsap.to(".hide", {

})