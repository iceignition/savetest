// main.js

const headline = document.querySelector('.work-context h2');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollY / pageHeight;

  if (scrollPercent < 1 / 6) {
    headline.innerHTML = `
      2025<br>
      Creative Direction for 'Accumulated Hits'<br>
      Visual Direction, Exhibition Planning, Digital Content Production,<br>
      Graphic Design, VFX
    `;
  } else if (scrollPercent < 3 / 6) {
    headline.innerHTML = `
      2025 <br>
      Creative Direction for the Graphic Performance Video, 'Chiaroscuro' <br>
      Filming, Editing, VFX, Graphic Design,<br>
      Book Design, Writing, Installation Design
    `;
  } else if (scrollPercent < 4 / 6) {
    headline.innerHTML = `
      2024<br>
      Brand Visual Direction for 'Kyolameth' <br>
      Creative Direction, Brand Identity Design, 3D Graphic Design,<br>
      AI Image Generation
    `;
  } else if (scrollPercent < 4.8 / 6) {
    headline.innerHTML = `
      2024<br>
      Creative Direction for 'SSGI' Magazine <br>
      Brand Identity Design, Content Creation, Editorial Design
    `;
  } else if (scrollPercent < 5.4 / 6) {
    headline.innerHTML = `
      2025 <br>
      Visual Direction for 'Kuai Kuai' <br>
      Social Media Content Creation, Photography, Editing
    `;
  } else if (scrollPercent < 6 / 6) {
    headline.innerHTML = `
      2024 <br>
      Virtual Exhibition Design for 'Time Spectrum' <br>
      Exhibition Identity Design, Poster Design, Leaflet Design
    `;
  }
});
