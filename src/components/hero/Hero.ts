import './hero.css';

export function Hero() {
  return `
  <section class="hero hero-section">
    <div class="hero-body pb-0">
      <div class="columns">
          <div class="column">
            <h1 class="hero__text--title">FIND <span class="is-underlined">ANYTHING</span><br>THAT MATCHES<br>YOUR STYLE</h1>
            <p class="my-5 hero__text--description">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <a href="#categories" class="button is-black is-rounded hero--button hero__text--button">Shop Now</a>
            <div class="columns mt-6">
              <div class="column is-narrow ">
                <p class="hero__text--stats--title">200+</p>
                <p class="hero__text--stats--description">International Brands</p>
              </div>
              <div class="hero-block is-hidden-mobile"></div>
              <div class="column is-narrow ">
                <p class="hero__text--stats--title">2,000+</p>
                <p class="hero__text--stats--description">High-Quality Products</p>
              </div>
              <div class="hero-block is-hidden-mobile"></div>
              <div class="column is-narrow">
                <p class="hero__text--stats--title">30,000+</p>
                <p class="hero__text--stats--description">Happy Customers</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="hero-image-container">
              <figure class="hero-img">
                <img src="/assets/hero.jpg" alt="Hero image">
              </figure>
            </div> 
          </div>
      </div>
  </div>
  </section>
`;
}
