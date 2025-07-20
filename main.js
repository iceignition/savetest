// main.js

const headline = document.querySelector('.work-context h2');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollY / pageHeight;

  if (scrollPercent < 1 / 6) {
    headline.innerHTML = `
      2025<br>
      Creative Direction for 
      <a href="./cv/cv.html" style={{textDecoration: 'underline',color: 'inherit',fontWeight: 'inherit'}}>'Accumulated Hits'</a><br>
      Visual direction, Exhibition planning, Digital content production,<br>
      Graphic design, VFX
    `;
  } else if (scrollPercent < 3 / 6) {
    headline.innerHTML = `
      2025 <br>
      Creative Direction for Graphic Performance Video,'Chiaroscuro' <br>
      Filming, Editing, VFX, Graphic Design, <br>
      Book Design, Writing, Installation Design

    `;
  } else if (scrollPercent < 4 / 6) {
    headline.innerHTML = `
      2024<br>
      Brand Visual Direction for 'kyolameth' <br>
      Creative Direction, Brand Identity Design, 3D Graphic Design <br>
      AI Image Generation
    `;
  } else if (scrollPercent < 4.8 / 6) {
    headline.innerHTML = `
      2024<br>
      Creative Direction for 'SSGI'<br>
      Brand Identity Design, Content Creation, Editorial
    `;
  } else if (scrollPercent < 5.4 / 6) {
    headline.innerHTML = `
      2025 <br>
      Visual Direction for 'Kuai Kuai' <br>
      SNS Contents Creation, Photography, Editing
    `;
  }else if (scrollPercent < 6 / 6) {
    headline.innerHTML = `
      2024 <br>
      Exhibition Design for 'Time Spectrum' <br>
      Exhibition Identity Design Pster Design, Reaflet Design, 
    `;
  }else {
    headline.innerHTML = `
      Jaemin An explores the overflow of visual culture.<br>
      He now experiments with <a href="./cv/cv.html">surface, light, and rhythm</a><br>
      to disturb the linear reading of images.
    `;
  }
});
