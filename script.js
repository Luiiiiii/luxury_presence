function toggleNav() {
    var nav = document.getElementById("mySidenav");
    var navmain = document.getElementById("nav-main");
    var main = document.getElementById("main");
    
    if (nav.style.width === "200px") {
        nav.style.width = "0";
        if (main, navmain) {
            main.style.marginLeft = "0";
            navmain.style.marginLeft = "0";
        }
    } else {
        nav.style.width = "200px";
        if (main, navmain) {
            main.style.marginLeft = "200px";
            navmain.style.marginLeft = "200px";
        }
    }
}

const firstAnimation = document.querySelectorAll('.comp-icon')
const secondAnimation = document.querySelectorAll('.animation')
const thirdAnimation = document.querySelectorAll('.gall-img')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation', 'second-scroll-animation', 'third-scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation', 'second-scroll-animation', 'third-scroll-animation')
            }

    })
},
   { threshold: 0.5
   });
  for (let i = 0; i < firstAnimation.length; i++) {
   const elements = firstAnimation[i];

    observer.observe(elements);
  }
  for (let i = 0; i < secondAnimation.length; i++) {
    const elements = secondAnimation[i];
 
     observer.observe(elements);
   }
   for (let i = 0; i < thirdAnimation.length; i++) {
    const elements = thirdAnimation[i];
 
     observer.observe(elements);
   }

   function changeSpanColor(span) {
    span.style.color = ""; 
}

function handleAnimationEnd(event) {
    if (event.animationName === "loading6454") {
        changeSpanColor(event.target);
    }
}

const spinnerSpans = document.querySelectorAll(".spinner span");
spinnerSpans.forEach((span) => {
    span.addEventListener("animationend", handleAnimationEnd);
});

setTimeout(function () {
    const loaderContainer = document.getElementById("loader-container");
    loaderContainer.style.display = "none";
}, 2000); 