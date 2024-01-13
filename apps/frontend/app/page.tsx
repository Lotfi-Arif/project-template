import QuickDeals from '../components/QuickDeals';
import RecommendedProducts from '../components/RecommendedProducts';
import TrendingCategories from '../components/TrendingCategories';
import TrendingCategoriesMain from '../components/TrendingCategoriesMain';
import TrendingProducts from '../components/TrendingProducts';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Explore Products - Framework Flow</title>
      </Head>
      <div>
        <TrendingCategoriesMain />
        <QuickDeals />
        <TrendingProducts />
        <RecommendedProducts />
        <TrendingCategories />
      </div>
    </>
  );
}
