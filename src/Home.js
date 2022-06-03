import ProductList from './component/Product/ProductList';
import useFetch from './useFetch';
const ProductsUrl = 'http://localhost:5000/api/product?page=2'


const Home = () => {

  const { data: products, isPending, error } = useFetch(ProductsUrl)



  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {products && <ProductList products={products} />}
    </div>
  );
}
export default Home;