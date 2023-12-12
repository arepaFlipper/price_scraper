import SearchBar from "@/components/SearchBar";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";

type THome = {}

const Home = async ({ }: THome) => {
  const all_products = await getAllProducts();
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-x-2">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image src="/assets/icons/arrow-right.svg" alt="arrow-right" width={16} height={16} />
            </p>
            <h1 className="head-text">
              Unleash the Power of{" "}
              <span className="text-primary">PriceScraper</span>
            </h1>
            <p className="mt-6">
              Empowering users with robust, self-service product and growth analytics to optimize conversion, foster engagement, and enhance customer retention.
            </p>

            <SearchBar />
          </div>

          <HeroCarousel />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {all_products?.map((product, idx) => {
            return (
              <ProductCard product={product} />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Home
