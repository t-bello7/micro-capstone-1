const menuBtn = document.querySelector('.btn-menu');
const closeBtn = document.querySelector('.btn-close');
const mediaQuery = window.matchMedia('(min-width: 768px)');
const menu = document.querySelector('.menu');
const partners = document.querySelector('.partners');
const footer = document.querySelector('.footer');
const body = document.querySelector('body');
const currentPage = window.location.href;

const aboutRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]\about.html/g;

const result = currentPage.match(aboutRegex);

const partner = `      
<section class="mg-1 partners flow container bg-dark">
        <h2 class="center text-light">Partner</h2>
        <div class="partner flex center">
          <svg class="mc-lauren" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.8 19.5">
              <path class="mc-2" d="M96.1 8.6c19.8-10.7 39.8-7 16.7 8 6.6-9.5-.6-12-16.7-8z" />
              <path class="mc-3"  d="M122.6 1c3.1-.1 4.7 1.3 4 3.2 0-1.7-1.6-3-4-3.2z" />
              <path class="st64" d="M8.1 9.5h8.7v3.1l3-3.1h7v9.7h-6.1v-4.1l-3.9 4.1h-5.7v-4.1l-3.9 4.1h-7l7.9-9.7z"/>
              <path class="st64" d="M39.8 18.6v-2.5c-8.4 1.8-9.9-2.9 0-1.6v-2.8c-16.6-4.1-16.1 11.3 0 6.9zM92 11.3h5.7v.7c3.8-1.4 6.6-1.3 8.5.4.6.6.6 1.2.6 2.1v4.8h-5.7v-4.4c-.7-.9-2.6-.9-3.5 0v4.4H92v-8zm-51.3 7.9V9.5h6.5v6h4.2c-.3-2.9 2.8-6 9.3-3.5v-.6h5.7v7.9h-5.7v-.6c-4.1 1.5-6.9.6-8.3-.9v1.5l-11.7-.1zm18.5-5.3c1.1 0 1.9.7 1.9 1.6 0 .9-.9 1.6-1.9 1.6-1.1 0-1.9-.7-1.9-1.6-.1-.9.8-1.6 1.9-1.6zm23.7.3h3.5c-.1-1.6-3.5-1.7-3.5 0zm7.8 2.5h-2c-1.6 1-4.6.8-5.9-.6H91l.2-.9c0-2.3-3.3-4.2-7.3-4.2-3 0-5.6 1.1-6.7 2.6V11a7 7 0 0 0-4.4 1.3v-.9h-5.7v7.9h5.7v-2.8c.5-.9 1.9-1.1 3.8-1 .2 2 2.8 3.7 6.2 3.9h1c4 0 6.3-1.6 6.9-2.7z"/>
          </svg>
          <svg class="red-bull" viewBox="0 -0.1 380.2 220.7" xmlns="http://www.w3.org/2000/svg">
            <path class="rb-1" d="M272 36h-16v32c0 10 11 19 25 19s25-9 25-19V36h-16v29c0 4-4 8-9 8s-9-4-9-8zM17 19v65H0V5h30c13 0 24 11 24 24 0 11-8 20-18 22l23 33H39L22 59V40h4c7 0 12-5 12-11s-5-10-11-10zm153 65V2h-15v39c-5-4-10-7-16-7-13 0-24 12-24 26s11 26 24 26c6 0 12-3 16-7v5zm-26-12c-7 0-12-5-12-12s5-13 12-13 11 6 11 13-5 12-12 12m94-31c4-4 7-9 7-15 0-5-2-10-6-14s-10-7-19-7h-27v79h35c13 0 24-10 24-22 0-9-4-16-14-21m-14 30h-15V20h11c5 0 8 3 8 8s-3 8-8 8h-6v15h11c5 0 9 4 9 10 0 5-3 9-10 10" />
            <path class="rb-2" d="M73 54a10 10 0 0 1 19 0zm35 9v-3c0-17-11-27-25-27S56 45 56 60s12 26 27 26c11 0 19-5 24-13l-13-5c-2 3-6 6-10 6-6 0-11-5-11-11zM314 2h15v82h-15zm26 0h16v82h-16z"/>
            <path class="rb-3" d="M142 139a39 39 0 1 1 77 0 39 39 0 0 1-77 0" />
            <path class="rb-4" d="m149 116 2 1 10 8 3 4c3 3 5 5 5 8l3 13 2 2c1 1 1 4 4 5l1 1c1 0 0 2-3 2 1 1 1 2-1 3-5 0-7-3-8-4l-3 2h-5l-6 2c-3 0-3-2-3-4v-1l-1 3c-1 1-1 2-3 2l-3 1-7 3-5-1-2-3h-1l-1-1-3-3v-2l3-1h5l2-1-1-2h-9c-3-1-5 1-7 1l-1 1-3 5-4 1c-2 2-4 1-7 1h-2l-2 2-4 2-2-1-4 4c-2 1-3 0-5-1l-1 1-3-1-1-2 1-2v-2l3-2 1-2c2-1 3-3 5-2l2 2 2-4 1-2h3l2-1v-1l-1-6h-6c-2-1-5-3-6-6-1-2-1-6 1-8l5-5h-2c-3-1-5-3-6-6l1-4 1-1 3 2h1c3 1 7 1 9 6 1 3-1 5-4 7l-4 5c-1 1 0 3 1 4h5l7-5c3-2 6-2 9-2l4-2c1-2 3-3 6-4h3l2-2 12-6 6-2 4 1zm4 34-5 1 2 4c0-2 2-3 3-5m56 1 3 4 2-4h-5m2 7h-1c1 2 0 4-3 5l-6-2c-2 0-5 1-6-2-3 3-6 4-8 4-1 0-3-1-1-3-4 2-4-1-4-2l3-2c7-7 4-19 11-26l11-9 5-4 4-2c2 0 4 0 6 2l3 2 2 1 6 3 4 2 6 2c2 1 3 3 6 3 5 1 9 3 12 6 3 1 5 3 8 2l2-2-2-4c-3-3-7-5-6-9 0-3 4-5 6-5l4-2c1 0 1-2 2-1l1 2c1 3 0 6-2 7l-4 2 5 6 1 4c0 3-2 6-4 7l-5 1h-2v5l-1 3h2c1 0 3 0 3 2l2 4c1-1 2-2 3-1l4 2 1 1 2 3v2c1 1 2 2 1 3l-4 1h-1l-6-1-2-2h-4c-2-2-5-4-8-4h-5l-4-3c-2-1-2-3-2-5h-12l-7 1-1 1h1l1 1h5l1 1v1l-2 4h-2c0 2-2 4-4 4h-2l-6-2-2-1-3-1v-1l-2-4"/>
            <g class="g-rb-1">
              <path class="rb-5" d="m148 129 1 5h-1l-1-4-1-3h1l1 2m16 14 2 4-1 1-1-3-2-1-2 1 1-3s0-2 2-1l1 2m-2 12v2h-2l-1-1 3-2v1m-73-37c3 1 5 1 7 3v4c-1 3-4 4-6 6-1 1-2 3-1 6 0 2 2 3 4 3 3 0 5-1 8-3 2-2 4-4 7-4l6-1 4-4 6-2c2 0 3-1 5-3s5-2 8-3l5-3h6l3 2 8 6 1 1 6 9 2 3c0 5 1 9 3 13l1 1 4 6h2v1h-1c-2 0-4-1-5-3l-4-4 1 1 1 4 3 3 2 1c-3 0-5 0-7-2l-2-1-4 2h-5l-4 1-2-1v-3l1-1-2-1 3-3 2-3-1-1-4 1h-4c2-2 2-5 2-7s-1 0-1 0l-2 6-3 1-1 1 1 2 2 5v3c0 1 0 1 0 0 1 0 2-1 2-3v-1l-3-6h1l2 1 2 4v3l-2 3-3 1-8 3-3-1-2-2-2-1-2-3v-1h5c2 2 2 4 4 4h4l1-2c0-2-1-4-3-5l-4-3-1-2c0-1 0-1 0 0l-1 2 1 1h-4l-6-1c-2 0-5 2-7 0v-7h-1l-1 6-4 5-6 2c-4 0-8 1-10 4v1c3-3 6-4 10-4 3 0 7-1 9-4l2-2 1 1-1 3-2 2-4 2h-9l-2 2-4 2h-2l-3 3h-4l1-4 2-1 1-2 4-3 1-3 1-1h2l3-2 1-1-1-3-1-5h-6c-2 0-5-2-6-4-1-3-1-6 1-8l5-5 1-1-1-1h-4l-4-5 1-3 4 3m-6 45-1 4-2-1c-1 0 0 0 0 0v-3l2-1 1 1m5-4-3 2h-2l1-2 2-1h1l1 1m50-1v2h-3l-1-2-1-1 4-1 1 2m63-16 1 3c1 0 0 0 0 0l-2-1-1 1-3 3v1h-1l2-4 3-4 1 1m0 13 1 2h-2l-1-2v-1l2 1m15-30v1l-4 4-1 2v-3l4-5 1 1m6-7 3 3 6 2c2 0 3 1 4 3l4 1c2 0 4 1 5 3l8 2c4 1 7 5 11 6 2 1 5 2 7 1l2-4c-1-4-6-6-8-10v-3l4-3 5-2 1-1 1 1c0 2 0 5-3 6l-2 1-3 1 2 2c3 2 5 5 5 9 1 3-1 5-4 6l-6 1h-1v9c0 2 2 1 4 2l1 1 1 2 2 4c1 1 2 3 4 2l1 4h-5c-1-1-1-3-3-3l-3 1-2-2c-3-2-6-3-9-2-2 1-3-1-4-1-2-1-3-3-3-5l-1-2 1-1c1 3 3 6 6 7h8l6 3c-2-3-5-5-9-4-3 0-6-1-8-3l-2-5-1-6h-1v6c0 2-2 2-3 2h-5c-3 0-7 2-10 1v-3l-1 2-4 3-3 3v1c0 2 2 2 4 3l2-1 2-3h5l-1 1-2 3h-1l-2 3h-3l-6-1-2-2h-2l-1-3-1-2v-1l3-5 1-1 2 1-3 5v3l1 1v-3l1-2 2-3v-2l-3-2c-2-3-2-5-2-8l-1-1v6l1 4v1h-4l-5-3c0 2 3 3 3 5l3 4-1 1h-1v2l-2 2-6-2h-4l-2-1h-1c-2 2-4 4-7 4l-1-1 4-4 2-4h-1l-3 5c-2 1-3 2-5 1 6-4 7-11 9-17 1-4 2-8 5-12l16-13 3-1 6 2m57 44 1 3v2h-2l-1-4 1-1h1m-5-4 3 2-1 1-1 1-1-1-2-2c1-1 1-2 2-1m-48-1-1 3h-2l-1-1v-2h4"/>
              <path class="rb-6" d="M20 220h14v-3H23v-10h11v-3H23v-7h11v-3H20zm28 0h3v-20l19 21v-27h-3v19l-20-20zm36 0h14v-3H87v-10h10v-3H87v-7h11v-3H84zm35-12c3 0 6-3 6-7 0-2-1-5-3-6l-7-1h-4v26h3v-11h1l8 11h4zm-5-11h1c3 0 7 0 7 4s-4 5-7 5h-1v-9zm36 10v2h7c-1 5-5 8-9 8-5 0-10-5-10-10 0-6 5-11 10-11 4 0 7 2 9 4l2-2a13 13 0 0 0-24 9c0 7 6 13 13 13s12-5 12-13v-1h-10zm28 1v12h3v-12l8-14h-3l-7 11-6-11h-4zm34 12h5c8 0 14-5 14-13 0-9-6-13-14-13h-6zm3-23h1c6 0 12 2 12 10 0 7-6 10-12 10h-1zm36 11c4 0 7-3 7-7 0-2-2-5-4-6l-7-1h-4v26h4v-11h1l8 11h3zm-4-11h1c3 0 7 0 7 4s-4 5-7 5h-1v-9zm23-3h3v26h-3zm16 26h3v-20l19 21v-27h-3v19l-19-20zm38-15v-11h-3v26h3v-11l2-1 9 12h5l-12-15 11-11h-4zM373 1l4 2 2 4-2 5-4 2-5-2-2-5 2-4 5-2m7 6-2-5a7 7 0 0 0-13 5l2 6c1 2 4 2 6 2l5-2 2-6m-5-1-1 1h-3V4h1l2 1 1 1m-5-3v8h1V8h1l2 1 1 1v1h1v-1l-1-2h-1l1-1 1-1-1-2-3-1z"/>
            </g>
          </svg>   
        </div>
    </section>`;
const footers = `
<footer class="container footer flex">
<svg class="f1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120px" height="30px" viewBox="0 0 120 30" version="1.1">
  <!-- Generator: Sketch 49.1 (51147) - http://www.bohemiancoding.com/sketch -->
  <defs>
      <path d="M101.086812,30 L101.711812,30 L101.711812,27.106875 L101.722437,27.106875 L102.761812,30 L103.302437,30 L104.341812,27.106875 L104.352437,27.106875 L104.352437,30 L104.977437,30 L104.977437,26.25125 L104.063687,26.25125 L103.055562,29.18625 L103.044937,29.18625 L102.011187,26.25125 L101.086812,26.25125 L101.086812,30 Z M97.6274375,26.818125 L98.8136875,26.818125 L98.8136875,30 L99.4699375,30 L99.4699375,26.818125 L100.661812,26.818125 L100.661812,26.25125 L97.6274375,26.25125 L97.6274375,26.818125 Z M89.9999375,30 L119.999937,0 L101.943687,0 L71.9443125,30 L89.9999375,30 Z M85.6986875,13.065 L49.3818125,13.065 C38.3136875,13.065 36.3768125,13.651875 31.6361875,18.3925 C27.2024375,22.82625 20.0005625,30 20.0005625,30 L35.7324375,30 L39.4855625,26.246875 C41.9530625,23.779375 43.2255625,23.52375 48.4068125,23.52375 L75.2405625,23.52375 L85.6986875,13.065 Z M31.1518125,16.253125 C27.8774375,19.3425 20.7530625,26.263125 16.9130625,30 L-6.25e-05,30 C-6.25e-05,30 13.5524375,16.486875 21.0849375,9.0725 C28.8455625,1.685 32.7143125,0 46.9486875,0 L98.7643125,0 L87.5449375,11.21875 L48.0011875,11.21875 C37.9993125,11.21875 35.7518125,11.911875 31.1518125,16.253125 Z"></path>
  </defs>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g>
          <mask fill="white">
              <use xlink:href="#path-1"></use>
          </mask>
          <use fill="#EE0000" xlink:href="#path-1"></use>
      </g>
  </g>
</svg>      
 <span>2015 creative commons korea.<br> Some Rights Reserved</ span>
</footer>  
`;

const handleDesktopChange = (e) => {
  if (!e.matches) {
    if (result) {
      footer.parentElement.insertBefore(partners, footer);
      footer.classList.remove('bg-dark');
      footer.classList.remove('text-white');
    } else {
      const partnerss = document.querySelector('.partners');
      const footerss = document.querySelector('.footer');
      if (partnerss) {
        partnerss.parentElement.removeChild(partnerss);
      }
      if (footerss) {
        footerss.parentElement.removeChild(footerss);
      }
    }
  }
  if (e.matches) {
    if (result) {
      partners.parentElement.removeChild(partners);
      footer.classList.add('bg-dark');
      footer.classList.add('text-white');
    } else {
      body.innerHTML += partner;
      body.innerHTML += footers;
    }
  }
};
menuBtn.addEventListener('click', () => {
  menu.classList.add('visible');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('visible');
});

mediaQuery.addEventListener('change', handleDesktopChange);
