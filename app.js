const featuresTog = document.getElementById('features');
const companyTog = document.getElementById('company');
const featuresDisplay = document.getElementById('featuresMenu');
const companyDisplay = document.getElementById('companyMenu');
const featuresIcon = document.getElementById('featuresIcon');
const menuOpen = document.getElementById('munuOpen');
const menuClose = document.getElementById('menuClose');
const navbar = document.getElementById('navbar');
const featuresMenuMobile = document.getElementById('featuresMenuMobile');
const companyMenuMobile = document.getElementById('companyMenuMobile');





featuresTog.addEventListener('click' , function () {

    if (featuresDisplay.style.visibility ==='hidden' ) {
        featuresDisplay.style.visibility = "visible"
    } else {
        featuresDisplay.style.visibility = 'hidden';        
    };

    if ( featuresMenuMobile.className === 'show') {
        featuresMenuMobile.className = 'featuresMenuMobile';
    } else {
        featuresMenuMobile.className = 'show'
    }
    
});


companyTog.addEventListener('click' , function () {

    if (companyDisplay.style.visibility ==='hidden' ) {
        companyDisplay.style.visibility = "visible"
    } else {
        companyDisplay.style.visibility = 'hidden';
    }

    if ( companyMenuMobile.className === 'show') {
        companyMenuMobile.className = 'companyMenuMobile';
    } else {
        companyMenuMobile.className = 'show'
    }
    
});

menuOpen.addEventListener('click' , function () {
    navbar.classList.toggle('active');
})

menuClose.addEventListener('click' , function () {
    navbar.classList.toggle('active');
})

