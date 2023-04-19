import { useEffect, useContext } from 'react';
import { Context } from '../../utils/context';
import { fetchDataFromApi } from '../../utils/api';
import './Home.scss';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';
const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetchDataFromApi('/api/products?populate=*');
    console.log(res.data);
    setProducts(res.data);
  };

  const getCategories = async () => {
    const res = await fetchDataFromApi('/api/categories?populate=*');
    console.log(res.data);
    setCategories(res.data);
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
