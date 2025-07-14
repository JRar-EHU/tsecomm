import './footer.css';

export function Footer(): string {
  const footerLinks: Record<string, string[]> = {
    COMPANY: ['About', 'Features', 'Works', 'Career'],
    HELP: [
      'Customer Support',
      'Delivery Details',
      'Terms & Conditions',
      'Privacy Policy',
    ],
    FAQ: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
    RESOURCES: [
      'Free eBooks',
      'Development Tutorial',
      'How to – Blog',
      'Youtube Playlist',
    ],
  };

  setTimeout(() => {
    const button = document.getElementById('subscribeButton')!;
    button.addEventListener('click', () => {
      const input = document.getElementById(
        'subscribeEmail',
      ) as HTMLInputElement;
      if (input.checkValidity()) {
        setTimeout(() => {
          const subscribeBlock = document.getElementById('subscribeBlock');
          if (!subscribeBlock) return;
          subscribeBlock.innerHTML = ` 
          <p class="has-text-centered footer--text-main__title has-text-white py-5">Success! You've subscribed to our newsletter.</p>
          `;
        }, 3000);
      } else {
        input.reportValidity();
      }
    });
  }, 0);

  return `
    <footer class="section footer ">
      <div id="subscribeBlock" class="box is-shadowless has-background-black footer--subscribe"> 
        <div class="columns">
          <div class="column is-two-thirds"> 
            <p class="footer--text-main__title has-text-white px-5 py-3"> 
              STAY UPTO DATE ABOUT <br> OUR LATEST OFFERS
            </p>
          </div> 
          <div class="column"> 
            <input id="subscribeEmail" class="input m-1 is-rounded footer--subscribe--button " type="email" placeholder="Enter your email address" required>
            <button id="subscribeButton" class="button m-1 is-rounded is-white footer--subscribe--button footer--text-subscribe-button__subscribe">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>

      <div class="columns is-mobile is-multiline is-justify-content-space-between">
        <div class="column is-one-quarter-tablet is-full-mobile mr-6">
          <p class="footer--text-main__title mb-2">SHOP.CO</p>
          <p class="mb-4 footer--text-main__description">We have clothes that suit your style and which you’re proud to wear. From women to men.</p>
          <div class="buttons">
              <figure class="image"> 
                <img src="/assets/tweeter-logo.png" alt="tweeter">
              </figure>
              <figure class="image"> 
                <img src="/assets/facebook-logo.png" alt="facebook">
              </figure>
              <figure class="image"> 
                <img src="/assets/instagram-logo.png" alt="instagram">
              </figure>
              <figure class="image"> 
                <img src="/assets/github-logo.png" alt="github">
              </figure>
          </div>
        </div>

        ${Object.entries(footerLinks)
          .map(
            ([title, links]) => `
              <div class="column is-half-mobile">
                <p class="footer--text-categories__title">${title}</p>
                <ul>
                  ${links.map((link) => `<li class="my-2"><a class="footer--text-categories__item">${link}</a></li>`).join('')}
                </ul>
              </div>
            `,
          )
          .join('')}

      </div>
      <hr class="footer--hr">
      <div class="columns is-vcentered ">
        <p class="column is-one-quarter footer--text-legal ">Shop.co © 2000–2023, All Rights Reserved</p>
        <div class="column is-one-quarter is-offset-half">
          <div class="columns is-mobile"> 
            <div class="column is-one-fifth px-0"> 
              <figure class="image"> 
                <img src="/assets/visa-logo.png" alt="visa">
              </figure>
            </div>
            <div class="column is-one-fifth px-0"> 
              <figure class="image"> 
                <img src="/assets/mc-logo.png" alt="MC">
              </figure>
            </div>
            <div class="column is-one-fifth px-0"> 
              <figure class="image"> 
                <img src="/assets/paypal-logo.png" alt="paypal">
              </figure>
            </div>
            <div class="column is-one-fifth px-0"> 
              <figure class="image"> 
                <img src="/assets/applepay-logo.png" alt="apple pay">
              </figure>
            </div>
            <div class="column is-one-fifth px-0"> 
              <figure class="image"> 
                <img src="/assets/googlepay-logo.png" alt="google pay">
              </figure>
            </div>
          </div>
        </div>
      </div> 
    </footer>
  `;
}
