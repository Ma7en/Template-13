

/*
==============================================
==============================================
*/


/* ====== start dark ====== */

// let darkIcon = document.querySelector(".dark-icon");
// let darkIconMoon = document.querySelector(".dark-icon .icon-moon");
// let darkIconSun = document.querySelector(".dark-icon .icon-sun");
// let body = document.querySelector("body");

// darkIconMoon.addEventListener("click", () => {
//     body.classList.add("dark");
    
//     darkIconSun.style.display = "block";
//     darkIconMoon.style.display = "none";
// });

// darkIconSun.addEventListener("click", () => {
//     body.classList.remove("dark");
    
//     darkIconSun.style.display = "none";
//     darkIconMoon.style.display = "block";
// });



/* ====== end dark ======= */


/*
==============================================
==============================================
*/


/* ====== start dark mode ====== */
// document.body.classList.add(localStorage.getItem("darkColor") || "color-1");

let dayNight = document.querySelector(".day-night");
let iDarkColor = document.querySelector(".day-night i");
let body = document.querySelector("body");

if(localStorage.getItem("theme") == null) {

    localStorage.getItem("theme", "light");

}

let d2localData = localStorage.getItem("theme");

if(d2localData == "light") {
    body.classList.remove("dark");

} else if (d2localData == "dark") {
    // d2darken.classList.toggle("active");
    body.classList.add("dark");
}


dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");

    dayNight.querySelector("i").classList.toggle("fa-moon");

    body.classList.toggle("dark");

    if(body.classList.contains("dark")) {
        // d2darken.classList.toggle("active");
        localStorage.setItem("theme", "dark");
    } else {
        // d2darken.classList.toggle("active");
        localStorage.setItem("theme", "light");
    }



    // add data to local storage
    // localStorage.setItem("darkColor", iDarkColor.getAttribute("data-dark"));
});

window.addEventListener("load", () => {
    if (body.classList.contains("dark")) {
        
        dayNight.querySelector("i").classList.add("fa-sun");
        
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    
    }
});




/* ====== end dark mode ====== */


/*
==============================================
==============================================
*/


/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100)
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})


// window.addEventListener("scroll", () => {
//     if (window.scrollY >= 100) {
//         btnTop.style.display = "block";
//     } else {
//         btnTop.style.display = "none";
//     }
// });

// btnTop.onclick = () => {
//     window.scrollTo({
//         // left: 0,
//         top: 0,
//         behavior: 'smooth',
//     })
// }

/* ====== end scroll to top btn ===== */


/*
==============================================
==============================================
*/


/* ========= start show and didden menu ========= */
let iconMenu = document.querySelector(".header #icon-menu");
let navMenu = document.querySelector(".header #nav-menu");
let landing = document.querySelector(".landing");

// show menu
iconMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// hidden menu 
landing.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

window.addEventListener("scroll", () => {
    navMenu.classList.remove("active");
});




/* ========= end show and didden menu ========= */



/*
==============================================
==============================================
*/


/* ========== start data year ============== */

let dateNow = new Date();
let spanDataYear = document.querySelector(".footer #dataYear");
window.addEventListener("load", () => {
    spanDataYear.innerHTML = dateNow.getFullYear();
});



/* ========== end data year ============== */


/*
==============================================
==============================================
*/

/* ========== start animation ============== */

let containers = document.querySelectorAll(".container");

console.log(containers);


window.addEventListener("scroll", () => {

    for(let i = 0; i < containers.length; i++) {
        if(window.scrollY >= containers[i].offsetTop - 400 ) {
            containers[i].classList.add("c_animation");
        } else {
            containers[i].classList.remove("c_animation");
        }
    }
});


// window.addEventListener("scroll", function() {

//     // if(window.scrollY >= containers.offsetTop) {
//     //     containers.forEach((cont) => {
//     //         cont.classList.add("c_animation");
//     //     });
//     // }

//     // containers.forEach((cont) => {
//     //     if(this.window >= cont.offsetTop ) {
//     //         cont.classList.add("c_animation");
//     //     }
//     // });

// });



/* ========== end animation ============== */

/*
==============================================
==============================================
*/


















