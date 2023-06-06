const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

gsap.from([".nav", ".heroName", ".content"], {
  x: "250vh",
  duration: 1,
  //   delay: 0.5,
  stagger: 0.25,
  ease: "power2.inOut",
});

const elementToRemove = document.getElementsByClassName("content");
const elementToAppend = document.getElementsByClassName("projects");
const whereToAppend = document.getElementById("name");
const element = `<div class="projects-new"><h4 class="projectName-text-new">Pr<span class="domain">o</span>je<span class="domain">c</span>ts</h4></div>`;
const oldElement = `
<div class="projects">
    <h4 class="projectName-text">Pr<span class="domain">o</span>je<span class="domain">c</span>ts</h4></h4>
</div>
`;

function handleScreenSize() {
  if (window.innerWidth <= 480) {
    console.log("removing element");
    if (elementToRemove[0].children["1"].children.length === 3) {
      elementToRemove[0].children["1"].removeChild(elementToAppend[0]);
      whereToAppend.innerHTML = element;
    }
  } else {
    console.log("adding element");
    if (elementToRemove[0].children["1"].children.length === 2) {
      document.getElementsByClassName("content-two")[0].innerHTML += oldElement;
      whereToAppend.innerHTML = "";
    }
  }
}

// Add event listener for screen size changes
window.addEventListener("resize", handleScreenSize);

// Initial execution of the function on page load
handleScreenSize();
