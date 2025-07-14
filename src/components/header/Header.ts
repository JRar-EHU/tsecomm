import './header.css';

export function Header() {
  return `
    <header class="section py-5">
      <nav class="navbar is-flex is-justify-content-space-between "> 
        <div class="navbar-brand "> 
          <div class="navbar-item p-0"> 
            <h1 class="header-text"><a href="/" data-navigo>SHOP.CO</a></h1>
          </div>
        </div>
        <div class="navbar-menu is-active is-shadowless">
          <div class="navbar-end is-flex is-flex-direction-row is-align-items-center"> 
            <div class="navbar-item p-0 pl-4">
             <a href="/cart" class="is-large" data-navigo>
              <img src="/assets/cart-icon.svg" alt="Cart">
             </a>
           </div>
            <div class="navbar-item p-0 pl-4"> 
            <a  class=" is-large">
               <img src="/assets/profile-icon.svg" alt="User">
            </a>
          </div>
          </div>
        </div>
      </nav>
    </header>
  `;
}
