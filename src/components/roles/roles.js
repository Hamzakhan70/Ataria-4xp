// JavaScript to control the sliding effect on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const heroDiv = document.getElementById("hero");
  console.log(
    document.body.scrollTop,
    document.documentElement.scrollTop,
    "elment scroll"
  );
  if (window.innerWidth <= 640) {
    // Apply only on small screens
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop >= 20
    ) {
      heroDiv.style.top = "0";
      heroDiv.style.left = "50%";
    } else {
      heroDiv.style.top = "-50px";
    }
  } else {
    heroDiv.style.top = "-50px";
  }
}

// Optional: Adjust on window resize
window.onresize = function () {
  const heroDiv = document.getElementById("hero");
  if (window.innerWidth > 640) {
    heroDiv.style.top = "-50px"; // Hide when resizing to larger screen sizes
  }
};
