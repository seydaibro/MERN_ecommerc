
import './App.css';
import './index.css';
import { ProductsContainer } from './containers/ProductsContainer';

import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div  className='App'>
      <Navbar/>
      <ProductsContainer/>
      <footer>
      </footer>
    </div>
  );
}

export default App;

