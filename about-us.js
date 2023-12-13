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
