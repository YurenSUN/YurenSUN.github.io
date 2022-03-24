var navBarShown = false;

function changeNavVisibility(){
  // Swift the navbar visibility between shown and hiden.
  let navBar = document.getElementById("navbarNavDropdown");
  if (!navBarShown){
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }

  navBarShown = !navBarShown;
}

function screenChangeNavVisibility(){
  // Hide navbar by clicking anywhere of the screen.
  let navBar = document.getElementById("navbarNavDropdown");
  if (navBarShown){
    navBar.style.display = "none";
  }
  navBarShown = false;
}

// Hide navbar by clicking anywhere of the screen.
document.body.addEventListener('click', screenChangeNavVisibility, true); 
