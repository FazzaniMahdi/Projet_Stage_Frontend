<template>
    <div class="app-container">
      <footer class="footer" id="cs-footer-1292">
        <div class="cs-container">
          <div class="cs-logo-group">
            <img src="@/assets/images/shuffle.png" width="50" height="50" class="d-inline-block align-top" alt="logo" />
            <span style="text-decoration: underline; font-size: xx-large;">ShuffleJob</span>
            <p class="cs-text">Find your next big job.</p>
            <a href="mailto:ShuffleJob@gmail.com" class="cs-link">
              <img
                class="cs-link-icon"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                src="@/assets/images/shuffle.png"
                alt="icon"
                width="24"
                height="24"
              />
              ShuffleJob@gmail.com
            </a>
          </div>
          <div>
            <img src="@/assets/images/buildings.jpg" class="bg-img" />
          </div>
          <ul class="cs-nav">
            <li class="cs-nav-li" style="list-style-type: none;"><span class="cs-header">Services</span></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">Email Marketing</a></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">Brandings</a></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">Campaign</a></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">Offline</a></li>
          </ul>
          <ul class="cs-nav">
            <li class="cs-nav-li" style="list-style-type: none;"><span class="cs-header">About</span></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">Our Story</a></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">Benefits</a></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">Team</a></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">Career</a></li>
          </ul>
          <ul class="cs-nav">
            <li class="cs-nav-li" style="list-style-type: none;"><span class="cs-header">Contact</span></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">Facebook</a></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">Instagram</a></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">LinkedIn</a></li>
          </ul>
          <ul class="cs-nav">
            <li class="cs-nav-li" style="list-style-type: none;"><span class="cs-header">Help</span></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">FAQ</a></li>
            <li class="cs-nav-li" style="list-style-type: none;"><a class="cs-nav-link" href="">Contact us</a></li>
          </ul>
        </div>
        <div class="cs-bottom">
          <span class="cs-copyright">
            Copyright© 2024. <a class="cs-copyright-link" href="">ShuffleJob.</a> All Rights Reserved.
          </span>
          <a href="" class="cs-copyright-link">Terms of Service</a>
          <a href="" class="cs-copyright-link">Privacy Policy</a>
        </div>
        <div class="cs-floater" aria-hidden="true"></div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "Footer"
  };
  </script>
  
  <style scoped>
  /* Container for entire layout to position footer at bottom */
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Content area that fills space above footer */
  .content {
    flex-grow: 1;
  }
  
  .footer {
    margin-top: auto;
    padding: var(--sectionPadding);
    padding-bottom: 1.25rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    z-index: 10;
  }
  
  .bg-img {
    opacity: 0.5;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
  }
  
  @media only screen and (min-width: 0rem) {
    .footer .cs-container {
      width: 100%;
      margin: auto;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      column-gap: 1.5rem;
      row-gap: 2.25rem;
    }
    .footer .cs-logo-group {
      width: 100%;
      position: relative;
    }
    .footer .cs-text {
      font-size: 0.875rem;
      line-height: 1.5em;
      margin: 0 0 clamp(1.25rem, 3vw, 2.25rem);
      width: 78%;
      max-width: 15rem;
      color: var(--bodyTextColor);
    }
    .footer .cs-link {
      font-size: 0.875rem;
      text-decoration: none;
      margin: 0;
      color: var(--headerColor);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: color 0.3s;
    }
    .footer .cs-link:hover {
      color: var(--primary);
    }
    .footer .cs-nav {
      width: 45%;
      max-width: 11.25rem;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .footer .cs-header {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--headerColor);
    }
    .footer .cs-nav-link {
      font-size: 0.875rem;
      text-decoration: none;
      color: var(--bodyTextColor);
      transition: color 0.3s;
    }
    .footer .cs-nav-link:hover {
      color: var(--primary);
    }
    .footer .cs-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      column-gap: 2.25rem;
      row-gap: 0.75rem;
    }
    .footer .cs-copyright {
      font-size: 0.875rem;
      text-align: center;
      width: 100%;
      color: var(--bodyTextColor);
    }
    .footer .cs-copyright-link {
      text-decoration: none;
      transition: color 0.3s;
    }
    .footer .cs-copyright-link:hover {
      color: var(--secondary);
    }
  }
  
  @media only screen and (min-width: 48rem) {
    .footer .cs-container {
      flex-direction: row;
      flex-wrap: nowrap;
      column-gap: 5.5rem;
    }
    .footer .cs-nav {
      width: auto;
    }
  }
  
  @media only screen and (min-width: 64rem) {
    .footer .cs-container {
      max-width: 80rem;
      justify-content: flex-end;
      column-gap: clamp(2.5rem, 6vw, 5.25rem);
    }
    .footer .cs-logo-group {
      width: 30%;
      margin-right: auto;
    }
    .footer .cs-text {
      width: 100%;
    }
  }
  </style>
  