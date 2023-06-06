const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

gsap.from([".nav", ".heroName", ".content"], {
  x: "250vh",
  duration: 1,
  stagger: 0.25,
  ease: "power2.inOut",
});

const contentToRemove = document.getElementsByClassName("content")[0];
const projectsElement = document.getElementsByClassName("projects")[0];
const nameContainer = document.getElementById("name");
const newProjectsElement = `<div class="projects-new"><h4 class="projectName-text-new">Projects</h4></div>`;
const oldProjectsElement = `
<div class="projects">
    <h4 class="projectName-text">Projects</h4>
</div>
`;

function handleScreenSize() {
  if (window.innerWidth <= 480) {
    console.log("Removing element");
    if (contentToRemove.children[1].children.length === 3) {
      contentToRemove.children[1].removeChild(projectsElement);
      nameContainer.innerHTML = newProjectsElement;
    }
  } else {
    console.log("Adding element");
    if (contentToRemove.children[1].children.length === 2) {
      document.getElementsByClassName("content-two")[0].innerHTML +=
        oldProjectsElement;
      nameContainer.innerHTML = "";
    }
  }
}

function toggleHover() {
  mobileMasquee.classList.toggle("hover");
}

const mobileMasquee = document.getElementsByClassName("connect")[0];
mobileMasquee.addEventListener("click", toggleHover);

window.addEventListener("resize", handleScreenSize);
handleScreenSize();
