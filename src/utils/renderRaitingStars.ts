const starFull = `
  <svg width="15" height="15" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.8487 -6.10352e-05L11.4679 5.63985L17.6412 6.38803L13.0867 10.6219L14.2827 16.7242L8.8487 13.7009L3.41466 16.7242L4.61073 10.6219L0.0562391 6.38803L6.22949 5.63985L8.8487 -6.10352e-05Z" fill="#FFC633"/>
  </svg>
`;
const starHalf = `
  <svg width="7.5" height="15" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.76418 16.7243L9.19822 13.701V0L6.57901 5.63991L0.405762 6.38809L4.96026 10.6219L3.76418 16.7243Z" fill="#FFC633"/>
  </svg>
`;

export const renderRating = (rating: number): string => {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating - fullStars === 0.5;
  const stars: string[] = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(`<li class="product--rating__item">${starFull}</li>`);
  }

  if (hasHalfStar) {
    stars.push(`<li class="product--rating__item">${starHalf}</li>`);
  }

  return stars.join('');
};
