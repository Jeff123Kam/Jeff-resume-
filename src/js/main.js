"use strict"

let resumePage
let homePage
let servicePage
let blogPage
let contactPage
let allPages
let pageNavigationMap
function init() {
     allPages = document.querySelectorAll('main section')
     homePage = document.querySelector('main > section[data-page-xxx="#home"]')
     resumePage = document.querySelector('main > section[data-page-yyy="#resume"]')
     servicePage = document.querySelector('main > section[data-page-zzz="#services"]')
     blogPage = document.querySelector('main > section[data-page-ppp="#Blog"]')
     contactPage = document.querySelector('main > section[data-page-vvv="#Contact"]')
     homePage.style.display = 'block'
     resumePage.style.display = 'none'
     servicePage.style.display = 'none'
     blogPage.style.display = 'none'
     contactPage.style.display = 'none'
     pageNavigationMap = {
        "#home": homePage,
        "#resume": resumePage,
        "#services": servicePage,
        "#Blog": blogPage,
        "#Contact": contactPage
    }
}
function highlightNavButton (navButtons) {
    //highlight
}
function addListenerForNavButton() {
    const navButtons = document.querySelectorAll('header nav a')
    navButtons.forEach(navButtons => {
    navButtons.addEventListener('click', (event) => {
        console.log(event.target)
        //change some css
        highlightNavButton(event.target)
    })
    })
}

function addHomeHashOnFirstLoad() {
    if (location.hash === "") {
        location.hash = "#home"
    }
}


function showTargetPage(pageNode) {
    hideAllPage()
    pageNode.style.display = "block"
}

function hideAllPage() {
    allPages.forEach(page => {
        page.style.display = 'none'
    })
}


function navigatePage() {
    const targetPage = pageNavigationMap[location.hash]
    showTargetPage(targetPage)
}

window.onload = function () {
  // add listener for hash change
   
  init()
  window.onhashchange = navigatePage 

  //if current hash is empty, add #home 
  addHomeHashOnFirstLoad()


  //add listner to nav button
  addListenerForNavButton()
  
};


// scrolls page function
window.onscroll = function() {myFunction()};


var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//google map 

function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }