/*console.log("hellow world!");*/

/*Header Template Funtion*/

class HeaderTemp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="header container">
    <a href="index.html">
      <img
        class="SSS-logo"
        alt="Sales Superior Services Logo"
        src="SharedContent/SSS- Logo Header.png"
      />
    </a>
    <nav class="main-nav">
      <ul class="main-nav-list">
        <li>
          <a class="main-nav-link" href="AboutusPage.html">About Us</a>
        </li>
        <li>
          <a class="main-nav-link" href="JoinusPage.html">Join Us</a>
        </li>
        <li>
          <a class="main-nav-link" href="FAQPage.html">FAQ</a>
        </li>
        <li>
          <a class="main-nav-link nav-cta" href="FindTalent.html">Find Talent</a>
        </li>
        <li>
          <a class="main-nav-link nav-cta" href="ApplynowPage.html">Apply Now</a>
        </li>
      </ul>
    </nav>
    <button class="btn-mobile-nav">
      <img
        class="btn-nav-icon"
        name="menu-icon"
        src="SharedContent/Menu button.svg"
        alt="Menu button for mobile"
      />
      <img
        class="btn-nav-icon"
        name="close-icon"
        src="SharedContent/Close Button Alice Blue.svg"
        alt="Menu button for mobile"
      />
    </button>
  </header> `;
  }
}

customElements.define("header-template", HeaderTemp);

/*Navigation Funtion*/
const btnnavel = document.querySelector(".btn-mobile-nav");
const headerel = document.querySelector(".header");

btnnavel.addEventListener("click", function () {
  headerel.classList.toggle("nav-open");
});

/*Footer Template Funtion*/

class FooterTemp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="section-footer">
    <div class="container grid grid--3-cols">
      <div class="logo-column">
        <a href="index.html" class="logo-container">
          <img
            class="logo-footer"
            alt="Sales Superior Services Logo"
            src="sharedcontent/SSS- Logo Header.png"
          />
        </a>
        <ul class="social-links">
          <li>
            <a class="footer-link-social" href="#">
              <img
                class="social-icon"
                alt="Facebook link icon"
                src="sharedcontent/Facebook Icon.svg"
                width="24"
                height="24"
              />
            </a>
          </li>
          <li>
            <a class="footer-link-social" href="#">
              <img
                class="social-icon"
                alt="Instagram link icon"
                src="sharedcontent/Intagram Icon.svg"
                width="24"
                height="24"
              />
            </a>
          </li>
          <li>
            <a class="footer-link-social" href="#">
              <img
                class="social-icon"
                alt="LinkedIn link icon"
                src="sharedcontent/LinkedIn Icon.svg"
                width="24"
                height="24"
              />
            </a>
          </li>
        </ul>
        <p class="copyright">
          Copyright &copy; <span class="year">2020</span> by Sales
          Superios Services. All right reserved.
        </p>
      </div>
  
      <div class="address-column">
        <header class="footer-heading">Contact Us</header>
        <address class="contact">
          <div>
            <img
              class="contact-icon contact-icon-google"
              alt="address icon"
              src="sharedcontent/Google Map Icon.svg"
              href="#"
            />
            <p class="address">
              Zip Rio Blanco, Edificio 2 San Pedro Sula, Cortez, Honduras
            </p>
          </div>
          <div class="contact-now">
            <a href="tel:+504 3354-7269">
              <img
                class="contact-icon"
                alt="phone icon"
                src="sharedcontent/Phone Icon.svg"
              />
            </a>
            <a class="footer-link" href="tel:+504 3354-7269">+504 3354-7269</a>
          </div>
          <div class="contact-now">
            <a href="mailto:info@3hn.com">
              <img
                class="contact-icon"
                alt="Email icon"
                src="sharedcontent/Email Icon.svg"
              />
            </a>
            <a class="footer-link" href="mailto:info@3hn.com">info@3hn.com</a>
          </div>
        </address>
      </div>
  
      <div class="Resources-column">
        <header class="footer-heading">Resources</header>
        <ul class="footer-resources">
          <li><a class="footer-link" href="JoinUsPage.html">Be part of the team</a></li>
          <li><a class="footer-link" href="FindTalent.html">Find your talent</a></li>
          <li><a class="footer-link" href="PrivacyPolicy.html">Privacy Policy</a></li>
          <li>
            <a class="footer-link acc-link-btn"             >Accesability Statement</a
            >
          </li>
          <li>
            <a class="footer-link DNSMinfo"         >Do not sell My Personal Information</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="accesability-lightbox">
      <div class="acc-container">
        <img
          class="acc-icon"
          alt="Accesability icon"
          src="sharedcontent/Accesability Icon Aliceblue.svg"
          href="#"
        />
        <h2 class="acc-header">Accessibility Statement</h2>
        <p class="acc-statement">
          Superior Sales Services is committed to providing a website accessible
          to the broadest possible audience, regardless of circumstance and
          ability. We aim to adhere as closely as possible to the Web Content
          Accessibility Guidelines (WCAG 2.0, Level AA), published by the World
          Wide Web Consortium (W3C). These guidelines explain how to make Web
          content more accessible for people with disabilities. Conformance with
          these guidelines will help make the web more user-friendly for everyone.
          While Superior Sales Services adhere to the policies and standards for
          accessibility, it is not always possible to do so in all website areas.
          We are currently working to achieve this. Be aware that due to the
          dynamic nature of the website, minor issues may occasionally occur as it
          is updated regularly. We are continually seeking solutions that will
          bring all site areas up to the same level of overall web accessibility.
          If you have any comments or suggestions relating to improving the
          accessibility of our site, please don't hesitate to contact our
          accessibility coordinator by emailing
          <a class="acc-email" href="mailto:info@3hn.com">info@3hn.com.</a>
          Your feedback will help us make improvements.
        </p>
        <p class="acc-btn">
          <a class="acc-link">Close</a>
        </p>
      </div>
    </div>
    <div class="DNSM-lightbox">
      <div class="DNSM-statement">
        <h2 class="DNSM-header">Do Not Sell My Personal Information</h2>
        <p class="DNSM-text">
          To disable the sales of your information to third parties, click
          submit.
        </p>
        <div class="DNSM-btn-statement">
          <p class="DNSM-btn DNSM-btn-cancel">
            <a class="DNSM-link">Cancel</a>
          </p>
          <p class="DNSM-btn DNSM-btn-submit">
            <a class="DNSM-link">Submit</a>
          </p>
        </div>
      </div>
      </div>
      <div class="DNSM-lightbox-nd">
        <div class="DNSM-statement-nd">
          <h2 class="DNSM-header">Sale of Information Has Been Disable</h2>
          <p class="DNSM-text">
            You have disabled the sale of personal information to third parties.
          </p>
          <p class="DNSM-btn DNSM-btn-close">
            <a class="DNSM-link">Close</a>
          </p>
        </div>
      </div>
    </div>
  </footer> `;
  }
}

customElements.define("footer-template", FooterTemp);

/* Set Current Year*/
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/*Accesability statement lightbox*/

const acclinkel = document.querySelector(".acc-link-btn");
const bodyel = document.querySelector("body");

acclinkel.addEventListener("click", function () {
  bodyel.classList.toggle("acc-open");
});

const closebtnel = document.querySelector(".acc-btn");
closebtnel.addEventListener("click", function () {
  bodyel.classList.remove("acc-open");
});

/*DNSMinfo statement lightbox*/

const DNSMlinkel = document.querySelector(".DNSMinfo");
DNSMlinkel.addEventListener("click", function () {
  bodyel.classList.toggle("Open-DNSM");
});

const DNSMcancelbtnel = document.querySelector(".DNSM-btn-cancel");
DNSMcancelbtnel.addEventListener("click", function () {
  bodyel.classList.remove("Open-DNSM");
});

const DNSMsubbtn = document.querySelector(".DNSM-btn-submit");
const DNSMStael = document.querySelector(".DNSM-statement");
const DNSMclikedel = "Your data will not be transferred to any 3rd party.";
const DNSMinfoel = document.querySelector(".DNSMinfo");
DNSMsubbtn.addEventListener("click", function () {
  bodyel.classList.replace("Open-DNSM", "open-nd-DNSM");
  DNSMinfoel.textContent = DNSMclikedel;
});

const DNSMclosebtnel = document.querySelector(".DNSM-btn-close");
DNSMclosebtnel.addEventListener("click", function () {
  bodyel.classList.remove("open-nd-DNSM");
});

/*FAQ Hidden Boxes*/

const accordionHeaderEL = document.querySelectorAll(".FAQ-accordion-header");

accordionHeaderEL.forEach((accordionHeaderEL) => {
  accordionHeaderEL.addEventListener("click", (event) => {
    accordionHeaderEL.classList.toggle("active");
    const accordionAnswerel = accordionHeaderEL.nextElementSibling;
    if (accordionHeaderEL.classList.contains("active")) {
      accordionAnswerel.style.maxHeight = accordionAnswerel.scrollHeight + "px";
    } else {
      accordionAnswerel.style.maxHeight = 0;
    }
  });
});

/*Swiper Configuration*/
var swiper = new swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
