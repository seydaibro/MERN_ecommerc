import ProductI from "../../models/product";
import { formatCurrency } from "../../utilities/formatCurrency";
import './Product.css'

interface ProductProps {
  product: ProductI;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <div className="Product-card">
        <div className="product-image">
        <img src={product.image} alt="" />
        </div>
      <h2>{product.name}</h2>
      <p>{formatCurrency(product.price)}</p>
    </div>
  );
}
