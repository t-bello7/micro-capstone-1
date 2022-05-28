const menuBtn = document.querySelector('.btn-menu');
const closeBtn = document.querySelector('.btn-close');
const menu = document.querySelector('.menu');
const driverContainer = document.querySelector('.drivers');

const drivers = [
  {
    id: '001',
    img_dir: './assets/img/max.jpg',
    header: 'Yochai Benkler',
    headerDesc: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler Studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: '002',
    img_dir: './assets/img/lewis.jpg',
    header: 'Yochai Benkler',
    headerDesc: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler Studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: '003',
    img_dir: './assets/img/alexender.jpg',
    header: 'Yochai Benkler',
    headerDesc: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler Studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: '004',
    img_dir: './assets/img/max.jpg',
    header: 'Yochai Benkler',
    headerDesc: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler Studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: '005',
    img_dir: './assets/img/lewis.jpg',
    header: 'Yochai Benkler',
    headerDesc: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler Studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: '006',
    img_dir: './assets/img/alexender.jpg',
    header: 'Yochai Benkler',
    headerDesc: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler Studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
];

const renderDocuments = (arr, container) => {
  arr.forEach((element) => {
    container.innerHTML += `
         <div class="flex driver">
            <div class="driver-img">
                <img src="${element.img_dir}" alt="max-img">
            </div>
            <div>
                <h3 class="text-dark">${element.header}</h3>
                <span class="text-primary">
                    ${element.headerDesc}
                </span>
                <p class="ff-cocogoose">
                  ${element.desc}    
                </p>
            </div>
        </div> 
       `;
  });
};

if (driverContainer) {
  renderDocuments(drivers, driverContainer);
  const button = document.createElement('button');
  button.innerHTML = 'MORE <i class="fa-solid fa-chevron-down"></i> ';
  button.type = 'button';
  button.className = 'center btn btn-driver';
  driverContainer.appendChild(button);
}

menuBtn.addEventListener('click', () => {
  menu.classList.add('visible');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('visible');
});
