const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//my new code begins here

//nav bar
const links = document.querySelectorAll('a');
links.forEach((currentValue, i) => (currentValue.textContent = Object.values(siteContent.nav)[i]));

links.forEach((item) => (item.style.color = 'green'));

// //Call-To-Action Section
const ctaHeader = document.querySelector('h1')
ctaHeader.textContent = (siteContent['cta']['h1'])

const button = document.querySelector('button')
button.textContent = (siteContent['cta']['button'])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Main Content Section
const h4 = document.querySelectorAll('h4');
h4[0].textContent = (siteContent['main-content']['features-h4']);
h4[1].textContent = (siteContent['main-content']['about-h4']);
h4[2].textContent = (siteContent['main-content']['services-h4']);
h4[3].textContent = (siteContent['main-content']['product-h4']);
h4[4].textContent = (siteContent['main-content']['vision-h4']);
h4[5].textContent = (siteContent['contact']['contact-h4']);

const p = document.querySelectorAll('p');
p[0].textContent = (siteContent['main-content']['features-content']);
p[1].textContent = (siteContent['main-content']['about-content']);
p[2].textContent = (siteContent['main-content']['services-content']);
p[3].textContent = (siteContent['main-content']['product-content']);
p[4].textContent = (siteContent['main-content']['vision-content']);
p[5].textContent = (siteContent['contact']['address']);
p[6].textContent = (siteContent['contact']['phone']);
p[7].textContent = (siteContent['contact']['email']);
p[8].textContent = (siteContent['footer']['copyright']);

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const newLink1 = document.createElement('a');
newLink1.textContent = 'Sign-Up';
newLink1.style.color = 'green';
const secondaryContent = document.querySelector('nav');
secondaryContent.appendChild(newLink1);


const newLink2 = document.createElement('a');
const tertiaryContent = document.querySelector('nav');
newLink2.style.color = 'green';
newLink2.textContent = 'Demo';
tertiaryContent.prepend(newLink2);