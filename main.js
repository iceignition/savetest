// main.js

const headline = document.querySelector('.work-context h2');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const pageHeight = document.body.scrollHeight - window.innerHeight;

  if (scrollY > pageHeight / 2) {
    headline.innerHTML = `
      Jaemin An explores the overflow of visual culture.<br>
      He now experiments with surface, light, and rhythm<br>
      to disturb the linear reading of images.
    `;
  } else {
    headline.innerHTML = `
    2025<br>
    visual direction, poster design, video editing <br>
    rxhbition planning <br> 
    `;
  }
});
