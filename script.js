// document.addEventListener("DOMContentLoaded", function () {
//     // Create a new XMLHttpRequest object
//     var xhr = new XMLHttpRequest();

//     // Define the path to your common files
//     var headerPath = "./components/header.html";
//     var footerPath = "./components/footer.html";

//     // Open a GET request to fetch the header content
//     xhr.open("GET", headerPath, true);

//     // Define the callback function to execute when the request is complete
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             // Insert the header content into the respective placeholder div
//             document.getElementById("headerContainer").innerHTML = xhr.responseText;

//             // Open a new GET request to fetch the footer content
//             xhr.open("GET", footerPath, true);
            
//             // Define the callback function for the footer request
//             xhr.onload = function () {
//                 if (xhr.status === 200) {
//                     // Insert the footer content into the respective placeholder div
//                     document.getElementById("footerContainer").innerHTML = xhr.responseText;
//                 }
//             };

//             // Send the request for the footer content
//             xhr.send();
//         }
//     };

//     // Send the request for the header content
//     xhr.send();
// });


//!Header and Nav
const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener('click', () => {
    nav.classList.toggle('openSearch');
    nav.classList.remove("openNav");
    if (nav.classList.contains('openSearch')) {
        searchIcon.classList.replace("fa-magnifying-glass", "fa-xmark");
    } else {
        searchIcon.classList.replace("fa-xmark", "fa-magnifying-glass");
    }
});

navOpenBtn.addEventListener('click', () => {
    nav.classList.remove('openSearch');
    nav.classList.add("openNav");
    searchIcon.classList.replace("fa-xmark", "fa-magnifying-glass");
});

navCloseBtn.addEventListener('click', () => {
    nav.classList.remove("openNav");
    document.querySelector('.search-box input').value = "";
});

function showicon() {
    const search = document.querySelector('.search-box input').value;
    const clearSearch = document.querySelector('.search-box .fa-xmark');
    
    if (search.length <= 0) {
        document.body.classList.remove('clear-active');
    } else {
        document.body.classList.add('clear-active');
    }

    clearSearch.addEventListener('click', () => {
        document.querySelector('.search-box input').value = "";
        document.body.classList.remove('clear-active');
    });
}

//!BACK TO TOP
const toTop = document.querySelector(".backToTop");
window.addEventListener("scroll",() =>{
    if(window.pageYOffset > 1000){
       toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});

//!Article Slider
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });
    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
})
prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });
    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
})
var playSlider;
var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });
    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
    },4000);
}
repeater();
//stop the image slider on mouseover
slider.addEventListener("mouseover",() =>{
    clearInterval(playSlider);
})
slider.addEventListener("mouseout",() =>{
    repeater();
})
//!FAQ
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) =>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})

//!COUNTER
const counterDisplay = document.querySelectorAll('.counter-value');
let interval = 4000;

counterDisplay.forEach((counterDisplay)=>  {
    let startValue = 0;
    let endValue = parseInt(counterDisplay.getAttribute("data-val"));
    let duration = interval/endValue
    let counter = setInterval(function(){
        startValue +=1;
        counterDisplay.textContent = startValue/10;
        if(startValue === endValue){
            clearInterval(counter)
        }
    },duration);
});
const poll = {
    question: "Did you find this article useful?",
    answers:[
        "Not so useful","Was helpful, but lacked some information","Extremely useful for me!"
    ]
}
















