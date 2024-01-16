// CLICK FUCNTION TO OPEN SUBMENU
function myFunction() {
  let x = document.getElementById("subMenu");
  let navbarItem = document.getElementById("navActive");

  if (x.style.display === "block") {
    x.style.display = "none";
    navbarItem.style.borderBottom = "none";
  } else {
    x.style.display = "block";
    navbarItem.style.borderBottom = "4px solid #00AEEF";
  }
}

// CLOSE ICON TO CLOSE SUBMENU
function closeSubMenu() {
  let subMenu = document.getElementById("subMenu");
  let navbarItem = document.getElementById("navActive");
  subMenu.style.display = "none";
  navbarItem.style.borderBottom = "none";
}

// CONFIRM NAVIGATION FOR SOCIAL ICON
function confirmNavigation(link) {
  const isConfirmed = confirm(`Do you want to navigate to ${link}?`);
  if (isConfirmed) {
    window.location.href = link;
  }
}

function toggleNavbar() {
  var navbarContainer = document.getElementById("navbarContainer");
  var currentDisplay = window.getComputedStyle(navbarContainer).display;

  // Toggle the visibility of the navbarContainer
  navbarContainer.style.display = (currentDisplay === "none" || currentDisplay === "") ? "flex" : "none";
}
