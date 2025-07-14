import './brandBar.css';

export function BrandBar() {
  const brands: Record<string, string> = {
    versace: '/assets/versace-logo.svg',
    zara: '/assets/zara-logo.svg',
    gucci: '/assets/gucci-logo.svg',
    prada: '/assets/prada-logo.svg',
    calvinKlein: '/assets/calvin-klein-logo.svg',
  };

  const brandColumns = Object.entries(brands)
    .map(
      ([name, path]) => `
      <div class="column has-text-centered"> 
        <img src="${path}" alt="${name} Logo">
      </div>
    `,
    )
    .join('');

  return `
    <section class="section has-background-black">
      <div class="columns is-vcentered">
        ${brandColumns}
      </div>
    </section>
  `;
}
