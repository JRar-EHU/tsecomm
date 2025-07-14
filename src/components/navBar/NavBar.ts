import './navBar.css';

export function NavBar(categoryName: string, productName?: string) {
  const category = `<li><a class="is-capitalized" href="/category/${categoryName}">${categoryName}</a></li>`;
  const categoryIsActive = `<li class="is-active is-capitalized"><a href="#" >${categoryName}</a></li>`;

  return `
    <section class="section py-1"> 
       <hr class="navBar--hr">
       <nav class="breadcrumb  navBar--text has-succeeds-separator mb-5 ">
          <ul class="is-centered">
            <li><a href="/" data-navigo>Home</a></li>
            ${
              productName
                ? category +
                  `<li class="is-active is-capitalized"><a href="#">${productName}</a></li>`
                : categoryIsActive
            }
          </ul>
       </nav>
    </section>
  `;
}
