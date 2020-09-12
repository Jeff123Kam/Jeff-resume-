"use strict"

let resumePage
let homePage
let allPages
let pageNavigationMap
function init() {
     allPages = document.querySelectorAll('main section')
     homePage = document.querySelector('main > section[data-page-xxx="#home"]')
     resumePage = document.querySelector('main > section[data-page-yyy="#resume"]')
     homePage.style.display = 'block'
     resumePage.style.display = 'none'
     pageNavigationMap = {
        "#home": homePage,
        "#resume": resumePage
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


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}