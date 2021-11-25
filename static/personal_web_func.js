var navBarShown = false;

function changeNavVisibility(){
  let navBar = document.getElementById("navbarNavDropdown");
  if (!navBarShown){
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }

  navBarShown = !navBarShown;
}

function screenChangeNavVisibility(){
  let navBar = document.getElementById("navbarNavDropdown");
  if (navBarShown){
    navBar.style.display = "none";
  }
  navBarShown = false;
}

// Click anywhere to change visibility
document.body.addEventListener('click', screenChangeNavVisibility, true); 
