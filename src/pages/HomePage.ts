import { Hero } from '../components/hero/Hero.ts';
import { BrandBar } from '../components/brandBar/BrandBar.ts';
import { Header } from '../components/header/Header.ts';
import { Footer } from '../components/footer/Footer.ts';
import { CategoriesGrid } from '../components/categoriesGrid/CategoriesGrid.ts';
import { NotificationBar } from '../components/notificationBar/NotificationBar.ts';

export async function HomePage(): Promise<string> {
  try {
    const categoriesGrid = await CategoriesGrid();

    const html = `
    ${NotificationBar()}
    ${Header()}
    ${Hero()}
    ${BrandBar()}
    ${categoriesGrid}
    ${Footer()}
  `;

    return html;
  } catch (error) {
    console.log(error);
    return `<p>HomePage error</p><<img src="/assets/slomalos.jpg" alt="error">`;
  }
}
