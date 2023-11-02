import sampleProducts from '../data/products.json';
import { Product } from '../components/products/Product';
import './productContainer.css'
export const ProductsContainer = () => {
  return (
     <div  className='section__margin'>
       <div  className='product-container'>
            {sampleProducts.map((product) => (
              <li key={product.slug}>
               <Product product={product} />
               </li>
              ))}
         </div>
     </div>
   
       
  )
}
