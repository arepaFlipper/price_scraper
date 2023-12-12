import { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface IProductCard {
  product: Product;
}

const ProductCard = ({ product }: IProductCard) => {
  const { title, _id, image, category } = product
  return (
    <Link href={`/products/${_id}`} key={_id} className="product-card">
      <div className="product-card_img-container">
        <Image src={image} alt={title} width={200} height={200} className="product-card_img" />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="product-title">{title}</h3>
        <div className="flex justify-between">
          <p className="text-black opacity-50 text-lg capitalize">{category}</p>
          <p>
            <span>{product?.currency}</span>
            <span>{product?.currentPrice}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
