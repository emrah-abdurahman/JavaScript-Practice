// Get the home link element which is the Flourishtry logo in the top left of the navbar
const homeLink = document.getElementById("home-link");
// Get all navigation links
const navLinks = document.getElementsByClassName("nav-link");
// Get both the sign up and log in links
const signUpLoginLinks = document.getElementsByClassName("sign-up-log-in");

// Add a mouseover event listener to the Flourishtry home logo
// This will add and remove the appropriate CSS classes
homeLink.addEventListener("mouseover", function () {
  homeLink.classList.add("home-link-mouse-over");
  homeLink.classList.remove("home-link-mouse-out");
});

// Add a mouseout event listener to the Flourishtry home logo
// This will add and remove the appropriate CSS classes
homeLink.addEventListener("mouseout", function () {
  homeLink.classList.add("home-link-mouse-out");
  homeLink.classList.remove("home-link-mouse-over");
});

// Use a for of loop to iterate through the HTMLCollection and add the appropriate event listeners to each navigation link
for (let navLink of navLinks) {
  navLink.addEventListener("mouseover", function () {
    navLink.classList.add("nav-link-mouse-over");
    navLink.classList.remove("nav-link-mouse-out");
  });
  navLink.addEventListener("mouseout", function () {
    navLink.classList.add("nav-link-mouse-out");
    navLink.classList.remove("nav-link-mouse-over");
  });
}

// Use a for of loop to iterate through the HTMLCollection and add the appropriate event listeners to both the sign up and log in links
for (let signUpLoginLink of signUpLoginLinks) {
  signUpLoginLink.addEventListener("mouseover", function () {
    signUpLoginLink.classList.add("sign-up-log-in-mouse-over");
    signUpLoginLink.classList.remove("sign-up-log-in-mouse-out");
  });
  signUpLoginLink.addEventListener("mouseout", function () {
    signUpLoginLink.classList.add("sign-up-log-in-mouse-out");
    signUpLoginLink.classList.remove("sign-up-log-in-mouse-over");
  });
}
