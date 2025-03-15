const ham = document.querySelector("#ham");
const menu = document.querySelector("#menu");
const navLinks = document.querySelectorAll("#menu li");

ham.addEventListener("click", () => {
  menu.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    // Check if the clicked li contains the resume link
    if (link.querySelector('a[href="resume/RESUME.pdf"]')) {
      // It's the resume link, do nothing special and let the browser handle it
      if (menu.classList.contains("active")) {
          menu.classList.remove("active");
      }
      return; // Exit the event handler, allowing the default behavior
    }

    // For other links, handle section switching and menu closing
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    }

    const a = link.querySelector('a');
    const sectionId = a.dataset.section;

    if (sectionId) {
      e.preventDefault();
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('home').classList.add('active');
});

var typed = new Typed("#element", {
  strings: ["Student.", "Coder.", "Programmer."],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  loopDelay: 1000,
});