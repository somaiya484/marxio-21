import {
  getFeaturedProducts,
  getProducts,
} from "@/lib/firestore/products/read_server";
import Header from "./components/Header";
import { getCollections } from "@/lib/firestore/collections/read_server";
import Categories from "./components/Categories";
import { getCategories } from "@/lib/firestore/categories/read_server";
import ProductsGridView from "./components/Products";
import CustomerReviews from "./components/CustomerReviews";
import Brands from "./components/Brands";
import { getBrands } from "@/lib/firestore/brands/read_server";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";


export default async function Home() {
  const [featuredProducts, collections, categories, products, brands] =
    await Promise.all([
      getFeaturedProducts(),
      getCollections(),
      getCategories(),
      getProducts(),
      getBrands(),
    ]);

  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <Banner></Banner>
      <Categories categories={categories} />
      <CategorySection></CategorySection>
      <ProductsGridView products={products} />
      <Brands brands={brands} />
      <CustomerReviews />
      <Footer />
    </main>
  );
}
