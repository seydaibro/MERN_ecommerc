import sampleProducts from '../../data/products.json';
import { Product } from '../../components/products/Product';
import './home.css'
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
     <div  className='section__margin'>
       <div  className='product-container'>
            {sampleProducts.map((product) => (
              <li key={product.slug}>
                <Link to={'/product/'+product.slug}>
               <Product product={product} />
               </Link>
               </li>
               
              ))}
         </div>
     </div>
   
       
  )
}

